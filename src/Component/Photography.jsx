import React, {Component} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import './Main_content.css';
import Sidebar from "./Sidebar";
import * as firebase from 'firebase'
import '@firebase/firestore';
import '@firebase/auth';
import '@firebase/storage';

class Photography extends Component {

        constructor(props) {
            super(props);

            this.state = {
                option: "Photo",
                fileURL: [],
                //Default parent state
                fire_path: "Photo Gallery/Best",
            };
            console.log(this.state.option);
            console.log(this.state.fire_path);


            this.childHandler = this.childHandler.bind(this)
        }

        childHandler(dataFromChild) {
            // log our state before and after we updated it
            console.log('%cPrevious Parent State: ' + JSON.stringify(this.state), "color:orange");

            this.setState({
                fire_path: dataFromChild,
                fileURL: []
            },() => console.log('Updated Parent State:', this.state));
        }


    componentDidUpdate() {
        // Get a reference to the storage service, which is used to create references in your storage bucket
        let storage = firebase.storage();
        let storageRef = storage.ref();
        // Create a reference under which you want to list
        let listRef = storageRef.child(this.state.fire_path);

        // Find all the prefixes and items.
        listRef.listAll().then((res) => {
            res.items.forEach((itemRef) => {
                itemRef.getDownloadURL().then((url) => {
                    // TODO: Display the image on the UI
                    // console.log(url);
                    let joined = this.state.fileURL.concat(url);
                    this.setState({fileURL: joined});

                }).catch(function (error) {
                    // Handle any errors
                    console.log(error);
                });
            });
        }).catch(function(error) {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="Photography-wrap">
                <Container className="Photography">
                    <Row>
                        <Col lg={1} className="Sidebar-area">
                            <Sidebar choice={this.state.option} action={this.childHandler}/>
                        </Col>
                        <Col lg={11}>
                            <h1 className="Title">Photography</h1>
                            <div>
                                {this.state.fileURL.map((url,index) => (
                                    <Image key={index} src={url} />
                                    ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Photography;
