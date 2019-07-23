import React, {Component} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import {BrowserRouter as Router, Link} from "react-router-dom";
import './Options.css';
import Home from "./Home";
import Photography from "./Photography";
import Projects from "./Projects";
import Programming from "./Programming";
import {Route} from "react-router";

class Options extends Component {
    render() {
        return (
            <Router>
            <div className="Options">
                <Container className="Categories-wrap">
                    <Row className="Categories">
                        <Col lg={4}>
                            <Link to="/Photography"><Image src="assets/Photo.png"  className="Photography" fluid roundedCircle/></Link>
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
                <Route exact path="/" component={Home} />
                <Route path="/Photography" component={Photography} />
                <Route path="/Programming" component={Programming} />
                <Route path="/Projects" component={Projects} />
            </Router>
        );
    }
}

export default Options;
