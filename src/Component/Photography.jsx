import React, {Component} from 'react';
import {Container, Row,Col} from 'react-bootstrap';
import './Photography.css';
import Sidebar from "./Sidebar";
import * as firebase from "firebase/app";

class Photography extends Component {

        constructor(props) {
            super(props);

            this.state = {
                option: "Photo"
            };
            console.log(this.state.option);
        }
    render() {
        return (
            <div className="Photography-wrap">
                <Container className="Photography">
                    <Row>
                        <Col lg={1}>
                            <Sidebar choice={this.state.option}/>
                        </Col>
                        <Col lg={11}>
                            <h1 className="Title">Photography</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Photography;
