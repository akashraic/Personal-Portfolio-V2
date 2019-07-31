import React, {Component} from 'react';
import {Container, Row,Col} from 'react-bootstrap';
import './Projects.css';
import Sidebar from "./Sidebar";

class Projects extends Component {
    render() {
        return (
            <div className="Projects-wrap">
                <Container className="Projects">
                    <Row>
                        <Col lg={1}>
                            <Sidebar/>
                        </Col>
                        <Col lg={11}>
                            <h1 className="Title">Other Projects</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Projects;
