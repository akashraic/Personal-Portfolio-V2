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
            desc: ""
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

    descriptionUpdater = (description) => {
        this.setState({
            desc: description,
        });
        console.log(this.state.desc)
    };

    componentDidMount() {
        /*this.setState({fire_path: "Base"},function () {
            console.log(this.state.fire_path);
        });*/
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

        let backdrop;
        let imgClass;
        let Gitlabel;
        let Weblabel;
        let body;

        if(this.state.sideDrawerOpen) {backdrop = <Backdrop click={this.backdropClickHandler}/>;}
        if (this.state.fire_path === "Programming/Holistic.png") {imgClass = "Promo-image-tall"}
        else {imgClass = "Promo-image"}
        if(this.state.fire_path === "Programming/Drone.png") {Gitlabel = "Available upon Request"; Weblabel = "None"}
        else {Gitlabel = "Here"; Weblabel = "Here"}
        if(this.state.fire_path === " ") {
           body =
               (<div className="Info-wrapper">
                    <Row className="Info-wrap">
                        <h1 className="Title">Welcome to my Programming Projects</h1>
                        <p className="Text-description">This section is a portfolio containing a combination of paid, school, and self-interest projects. Here you can find the details of some of the projects I have worked on, such as: details, features, project completion time etc. the project listed below is on this own website. Please take your time  </p>
                        <h4 className="Extra-info"><b>Github Link: </b><a href="#">{Gitlabel}</a></h4>
                        <h4 className="Extra-info"><b>Features: </b></h4>
                        <h4 className="Extra-info"><b>Tech Stack: </b></h4>
                        <h4 className="Extra-info"><b>Completion time for project:</b></h4>
                    </Row>
                </div>); }
        else {
            body =
                (<div>
                    <Row className="Promo-image-wrap">
                        <div className="Image-wrap">
                            <Image className={imgClass} src={this.state.pic} />
                        </div>
                    </Row>
                    <Row className="Info-wrap">
                        <h1 className="Title">Project Description</h1>
                        <p className="Text-description">{this.state.desc}</p>
                        <h4 className="Extra-info"><b>Github Link: </b><a href="#">{Gitlabel}</a></h4>
                        <h4 className="Extra-info"><b>Original Website: </b><a href="#">{Weblabel}</a></h4>
                        <h4 className="Extra-info"><b>Features: </b></h4>
                        <h4 className="Extra-info"><b>Tech Stack: </b></h4>
                        <h4 className="Extra-info"><b>Completion time for project:</b></h4>
                    </Row>
                </div>); }

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
                                hide={this.drawerToggleClickHandler}
                                description={this.descriptionUpdater} />
                            {backdrop}
                        </Col>
                    </Row>
                        {body}
                </Container>
            </div>
        );
    }
}

export default Programming;
