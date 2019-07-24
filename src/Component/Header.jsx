import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './Header.css';

class Header extends Component {

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
                </Container>
            </div>
        );
    }
}

export default Header;
