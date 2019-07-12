import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import './Continue.css';

class Continue extends Component {
    render() {
        return (
            <div className="Continue">
                <Container>
                    <Row className="btn-wrapper-wrap">
                        <Col lg={4}/>
                        <Col lg={4} className="btn-wrapper">
                            <Button href="#" className="btn" block>Continue</Button>
                        </Col>
                        <Col lg={4}/>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Continue;
