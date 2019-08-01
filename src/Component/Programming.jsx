import React, {Component} from 'react';
import {Container, Row,Col} from 'react-bootstrap';
import './Programming.css';
import Sidebar from "./Sidebar.jsx";

class Programming extends Component {
    constructor(props) {
        super(props);

        this.state = {
            option: "Prog"
        };
        console.log(this.state.option);
    }
    render() {
        return (
            <div className="Programming-wrap">
                <Container className="Programming">
                    <Row>
                        <Col lg={1} className="Sidebar-area">
                            <Sidebar choice={this.state.option}/>
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
