import React, {Component} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import './Main_content.css';
import Sidebar from "./Sidebar.jsx";
import Toolbar from "./SideDrawer/Toolbar";
import Backdrop from "./Backdrop/Backdrop";
import * as firebase from 'firebase';

class Programming extends Component {
    constructor(props) {
        super(props);

        this.state = {
            option: "Prog",
            sideDrawerOpen: false,
            fire_path: ' ',
            pic: ' ',
            bool: true,
        };

        this.childHandler = this.childHandler.bind(this);

        console.log(this.state.fire_path)
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return{sideDrawerOpen: !prevState.sideDrawerOpen}
        });
    };

    childHandler(dataFromChild) {
        // log our state before and after we updated it
        this.state.bool = true;
        // console.log('%cPrevious Parent State: ' + JSON.stringify(this.state), "color:orange");
        this.setState({
            fire_path: dataFromChild,
            image: ""
        },() => console.log('Updated Parent State:', this.state));
    }

    componentDidMount() {
        this.setState({fire_path: "Programming/BOTB.png"},function () {
            console.log(this.state.fire_path);
        });
    }

    componentDidUpdate() {
        if (this.state.bool) {
            // Get a reference to the storage service, which is used to create references in your storage bucket
            let storage = firebase.storage();
            // Create a reference to the file we want to download
            let starsRef = storage.ref().child(this.state.fire_path);
            // Get the download URL
            starsRef.getDownloadURL().then((url) => {
                console.log(url);
                this.setState({pic: url})
            }).catch(function (error) {
                console.log(error);
            });
        }
        this.state.bool = false;
    }

    render() {

        console.log(this.state.pic);

        let backdrop;

        if(this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler}/>;
        }

        let imgClass;

        if (this.state.fire_path === "Programming/Holistic.png") {
            imgClass = "Promo-image-tall"
        }

        else {
            imgClass = "Promo-image"
        }

        return (
            <div className="Programming-wrap">
                <Toolbar
                    drawerClick={this.drawerToggleClickHandler}
                    path={this.childHandler}/>
                <Container className="Programming">
                    <Row className="Image-and-sidebar">
                        <Col className="Sidebar-area">
                            <Sidebar
                                choice={this.state.option}
                                action={this.childHandler}
                                show={this.state.sideDrawerOpen}
                                hide={this.drawerToggleClickHandler} />
                            {backdrop}
                        </Col>
                    </Row>
                    <Row className="Promo-image-wrap">
                        <div className="Image-wrap"><Image className={imgClass} src={this.state.pic} /></div>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Programming;
