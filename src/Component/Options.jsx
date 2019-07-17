import React, {Component} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import './Options.css';

class Options extends Component {
    render() {
        return (
            <div className="Options">
                <Container className="Categories-wrap">
                    <Row className="Categories">
                        <Col lg={4}>
                            <a href="#"><Image src="assets/Photo.png"  className="Photography" fluid roundedCircle/></a>
                            <label className="label">Photography</label>
                        </Col>
                        <Col lg={4}>
                            <a href="#"><Image src="assets/Dev.png" className="Programming" fluid roundedCircle/></a>
                            <label className="label">Programming</label>
                        </Col>
                        <Col lg={4}>
                            <a href="#"><Image src="assets/Other.png" className="Other" fluid roundedCircle/></a>
                            <label className="label" id="project">Project Management</label>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default Options;
