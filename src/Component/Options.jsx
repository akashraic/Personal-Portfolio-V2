import React, {Component} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import {BrowserRouter as Router, Link} from "react-router-dom";
import './Options.css';
import Home from "./Home";
import Photography from "./Photography";
import Projects from "./Projects";
import Programming from "./Programming";
import {Route, Switch} from "react-router";
import Routes from "./Routes";

class Options extends Component {
    render() {
        return (
            <div className="Options">
                <Container className="Categories-wrap">
                    <Row className="Categories">
                        <Col lg={4}>
                            <Link to="/Photography"><Image src="assets/Photo.png" className="Photography" fluid roundedCircle/></Link>
                            <label className="label">Photography</label>
                        </Col>
                        <Col lg={4}>
                            <Link to="/Programming"><Image src="assets/Dev.png" className="Programming" fluid roundedCircle/></Link>
                            <label className="label">Programming</label>
                        </Col>
                        <Col lg={4}>
                            <Link to="/Projects"><Image src="assets/Other.png" className="Other" fluid roundedCircle/></Link>
                            <label className="label" id="project">Project Management</label>
                        </Col>
                    </Row>

               </Container>
            </div>
        );
    }
}

export default Options;
