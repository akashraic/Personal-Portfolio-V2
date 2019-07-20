import React, {Component} from 'react';
import {Container, Row,Col} from 'react-bootstrap';
import './Programming.css';

class Programming extends Component {
    render() {
        return (
            <div className="Programming-wrap">
                <Container className="Programming">
                    <Row>
                        <Col lg={2}>
                        </Col>
                        <Col lg={10}>
                            <h1 className="Title">Programming</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Programming;
