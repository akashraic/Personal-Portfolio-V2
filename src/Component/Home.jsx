import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './Home.css';
import Continue from './Continue.jsx';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Container>
                    <Row className="Logo">
                        <Col lg={3}/>
                        <Col lg={6}>
                            <h1 className="Akash">Akash Rai</h1>
                        </Col>
                        <Col lg={3}/>
                    </Row>

                    <Continue/>
                </Container>
            </div>
        );
    }
}

export default Home;
