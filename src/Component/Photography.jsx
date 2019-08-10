import React, {Component} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import './Main_content.css';
import Sidebar from "./Sidebar";
import * as firebase from 'firebase'
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import Backdrop from './Backdrop/Backdrop';
import Lightbox from 'react-lightbox-component';
import Toolbar from "./SideDrawer/Toolbar";
/*
import '@firebase/firestore';
import '@firebase/auth';
import '@firebase/storage';
*/

class Photography extends Component {

        constructor(props) {
            super(props);

            this.state = {
                option: "Photo",
                fileURL: [],
                //Default parent state
                fire_path: "",
                bool: true,
                sideDrawerOpen: false
            };

            console.log(this.state.option);
            console.log(this.state.fire_path);

            this.childHandler = this.childHandler.bind(this);
        }

        drawerToggleClickHandler =() => {
            this.setState((prevState) => {
                return{sideDrawerOpen: !prevState.sideDrawerOpen}
            });
        };

        childHandler(dataFromChild) {
            // log our state before and after we updated it
            this.state.bool = true;
            console.log('%cPrevious Parent State: ' + JSON.stringify(this.state), "color:orange");
            this.setState({
                fire_path: dataFromChild,
                fileURL: []
            },() => console.log('Updated Parent State:', this.state));
        }

        componentDidMount() {
            this.setState({fire_path: "Photo Gallery/Best"})
        }

        componentDidUpdate() {
            if (this.state.bool) {
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
                            //console.log(this.state);
                        }).catch(function (error) {
                            // Handle any errors
                            console.log(error);
                        });
                    });
                }).catch(function (error) {
                    console.log(error);
                });
                this.state.bool = false;
            }
        }

    render() {
            let path = this.state.fileURL.length;
            // array of N elements, where N is the number of rows needed
            const rows = [...Array(Math.ceil(path/4))];
            // chunk the products into the array of rows
            const imgRows = rows.map((row, index) => this.state.fileURL.slice(index * 4, index * 4 + 4) );
            // Map the rows as div.row
            const imgURL = imgRows.map((row, index) => (
                <Col className="Image-container" >
                     {/*map products in the row as images */}
                    {row.map ( url => <Image className="Photo-Images" key={index} src={url}/>)}
                </Col>
            ));

            let sidebar;
            let backdrop;

            if(this.state.sideDrawerOpen) {
                sidebar = <Sidebar choice={this.state.option} action={this.childHandler}/>;
                backdrop = <Backdrop/>
            }

            //console.log(imgURL);

            /*this.state.fileURL.forEach((url, index) => {
                if ((index+1) % 4 === 0) {
                    imgURL.push(<Col className="Image-container"><Image className="Photo-Images" key={index} src={url}/></Col>)
                }
                else {
                    imgURL.push(<Image className="Photo-Images" key={index} src={url}/>)
                }
            });*/

                /*images = <div>{this.state.fileURL.map((url,index) => (
                    <Image className="Photo-Images" key={index} src={url} />
                ))}</div>*/

                    return (
                        <div className="Photography-wrap">
                            <div><Toolbar drawerClickHandler={this.drawerToggleClickHandler}/></div>
                            <Container className="Photography">
                                <Row className="Title-row">
                                    <Col className="Title-col">
                                        <h1 className="Title">Photography</h1>
                                    </Col>
                                </Row>
                                <Row className="Image-and-sidebar">
                                    <Col className="Sidebar-area">
                                        {sidebar}
                                        {backdrop}
                                    </Col>
                                    {imgURL}
                                </Row>
                            </Container>
                        </div>
                    );
            }
}

export default Photography;
