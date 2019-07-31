import React, {Component} from 'react';
import {Container, Row,Col} from 'react-bootstrap';
import './Programming.css';
import Sidebar from "./Sidebar";

class Programming extends Component {
    render() {
        return (
            <div className="Programming-wrap">
                <Container className="Programming">
                    <Row>
                        <Col lg={1} className="Sidebar-area">
                            <Sidebar/>
                        </Col>
                        <Col lg={11}>
                            <h1 className="Title">Programming</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Programming;
