import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Container>
                    <Row className={"Logo"}>
                        <Col lg={4}/>
                        <Col lg={4}>
                            <h1>Akash Rai</h1>
                        </Col>
                        <Col lg={4}/>
                    </Row>

                    <Row>
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

export default Home;
