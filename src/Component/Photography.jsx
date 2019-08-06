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
            };
            console.log(this.state.option);
        }


    componentDidMount() {
        // Get a reference to the storage service, which is used to create references in your storage bucket
        let storage = firebase.storage();
        let storageRef = storage.ref();
        // Create a reference under which you want to list
        let listRef = storageRef.child('Photo Gallery/Cars');

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
                            <Sidebar choice={this.state.option}/>
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
