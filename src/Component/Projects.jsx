import React, {Component} from 'react';
import {Container, Row, Col, Image, Button} from 'react-bootstrap';
import './Main_content.css';
import Sidebar from "./Sidebar.jsx";
import Toolbar from "./SideDrawer/Toolbar";
import Backdrop from "./Backdrop/Backdrop";
import * as firebase from 'firebase';
import {Link} from "react-router-dom";
import Footer from "./Footer/Footer";


class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            option: "Proj",
            sideDrawerOpen: false,
            fire_path: ' ',
            pic: ' ',
            bool: true,
            desc: " ",
            webLink: " ",
            Resp: " ",
            Accomp: " ",
            time: " ",
            linkLabel: " ",
            relLinks: " "

        };

        this.childHandler = this.childHandler.bind(this);
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

    projectUpdater = (Description, Website, Responsibilities, Accomplishments, Timeline, Label, relatedLinks) => {
        this.setState({
            desc: Description,
            webLink: Website,
            Resp: Responsibilities,
            Accomp: Accomplishments,
            time: Timeline,
            linkLabel: Label,
            relLinks: relatedLinks
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
        let Weblabel;
        let body;

        if(this.state.sideDrawerOpen) {backdrop = <Backdrop click={this.backdropClickHandler}/>;}
        if(this.state.fire_path === "Programming/Drone.png") {Weblabel = "None"}
        else { Weblabel = "Here"}
        if(this.state.fire_path === " ") {
            body =
                (<div className="Info-wrapper">
                    <Row className="Info-wrap">
                        <h1 className="Title">Project Management</h1>
                        <p className="Text-description">
                            This section is a portfolio containing projects I have worked on while
                            working with a team or an organization. This section shows my ability to
                            handle the management and buisness side of projects. The details, vision,
                            and accomplishments of some of my projects  are available here.
                            The original website link is also available. but please note that although
                            I may have contributed a significant amount, every project had a team of
                            amazing people along the way and the completion of these projects
                            would not be possible without their contribution. To learn more about my team,
                            be sure to contact me. You can find my list of projects by clicking the side
                            menu button. To come back to this page, click on "Programming" in the navigation bar
                            above. If any of projects are of interest to you, then please do not hesitate
                            to <Link to="#">contact</Link> me for more information
                        </p>
                    </Row>
                </div>); }
        else {
            body =
                (<div>
                    <Row className="Promo-image-wrap">
                        <div className="Image-wrap">
                            <Image className="Promo-image" src={this.state.pic} />
                        </div>
                    </Row>
                    <Row className="Info-wrap">
                        <h1 className="Title">Project Description</h1>
                        <p className="Text-description">{this.state.desc}</p>
                        <h4 className="Extra-info"><b>Website: </b><a href={this.state.webLink} target="_blank" rel="noopener noreferrer">{Weblabel}</a></h4>
                        <h4 className="Extra-info"><b>Responsibilities: </b>{this.state.Resp} </h4>
                        <h4 className="Extra-info"><b>Accomplishments: </b>{this.state.Accomp}</h4>
                        <h4 className="Extra-info"><b>Completion time for project:</b> {this.state.time}</h4>
                        <h4 className="Extra-info"><b>Related Links: </b><a href={this.state.relLinks} target="_blank" rel="noopener noreferrer">{this.state.linkLabel}</a></h4>
                    </Row>
                </div>); }
        return (
            <div className="Projects-wrap">
                <Toolbar
                    drawerClick={this.drawerToggleClickHandler}
                    path={this.childHandler}/>
                <Container className="Projects">
                    <Row className="Image-and-sidebar">
                        <Col className="Sidebar-area">
                            <Sidebar
                                choice={this.state.option}
                                action={this.childHandler}
                                show={this.state.sideDrawerOpen}
                                hide={this.drawerToggleClickHandler}
                                project = {this.projectUpdater}/>
                            {backdrop}
                        </Col>
                    </Row>
                    {body}
                    <Row className="btn-wrapper-wrap">
                        <Col lg={4}/>
                        <Col lg={4} className="btn-wrapper">
                            {/*<Button className="btn" block onClick={this.changeState}>Continue</Button>*/}
                            <Button className="btn" block onClick={this.buttonClickHandler}>Show More</Button>
                        </Col>
                        <Col lg={4}/>
                    </Row>
                </Container>
                <Footer/>
            </div>
        );
    }
}

export default Projects;
