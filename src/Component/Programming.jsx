import React, {Component} from 'react';
import {Container, Row, Col, Image, Button} from 'react-bootstrap';
import './Main_content.css';
import Sidebar from "./Sidebar.jsx";
import Toolbar from "./SideDrawer/Toolbar";
import Backdrop from "./Backdrop/Backdrop";
import * as firebase from 'firebase';
import {Link} from "react-router-dom";

class Programming extends Component {
    constructor(props) {
        super(props);

        this.state = {
            option: "Prog",
            sideDrawerOpen: false,
            fire_path: ' ',
            pic: ' ',
            bool: true,
            desc: " ",
            git: " ",
            website: " ",
            specs: " ",
            techStack: " ",
            time: " "
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

    descriptionUpdater = (description, github, web, features, tech, duration) => {
        this.setState({
            desc: description,
            git: github,
            website: web,
            specs: features,
            techStack: tech,
            time: duration,
        });
        console.log(this.state.desc)
    };

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    };

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
                        <h1 className="Title">Programming Projects</h1>
                        <p className="Text-description">
                            This section is a portfolio containing a combination of paid, school,
                            and self-interest projects. The details of some of the projects I have
                            worked on are available here, such as: the project's purpose, features,
                            project completion time etc. The Github link and original website link
                            is also available. but please note that my contribution to the
                            project is only the code found in my github, any further changes
                            may ave been made by the owner themselves. You can find my list
                            of projects by clicking the side menu button. To come back to this
                            page, click on "Programming" in the navigation bar above. If any of
                            projects are of interest to you, then please do not hesitate
                            to <Link to="#">contact</Link> me for more information
                        </p>
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
                        <h4 className="Extra-info"><b>Github Link: </b><a href={this.state.git} target="_blank" rel="noopener noreferrer">{Gitlabel}</a></h4>
                        <h4 className="Extra-info"><b>Original Website: </b><a href={this.state.website} target="_blank" rel="noopener noreferrer">{Weblabel}</a></h4>
                        <h4 className="Extra-info"><b>Features: </b>{this.state.specs} </h4>
                        <h4 className="Extra-info"><b>Tech Stack: </b>{this.state.techStack}</h4>
                        <h4 className="Extra-info"><b>Completion time for project:</b> {this.state.time}</h4>
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
                    <Row className="btn-wrapper-wrap">
                        <Col lg={4}/>
                        <Col lg={4} className="btn-wrapper">
                            {/*<Button className="btn" block onClick={this.changeState}>Continue</Button>*/}
                            <Link to='/Pricing' className={"anchor"}><Button className="btn" block>Pricing</Button></Link>
                        </Col>
                        <Col lg={4}/>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Programming;
