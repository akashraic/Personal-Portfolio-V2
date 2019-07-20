import React, {Component} from 'react';
import {Container, Row,Col} from 'react-bootstrap';
import './Photography.css';

class Photography extends Component {
    render() {
        return (
            <div className="Photography-wrap">
                <Container className="Photography">
                    <Row>
                        <Col lg={2}>
                        </Col>
                        <Col lg={10}>
                            <h1 className="Title">Photography</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Photography;
