import React, {Component} from 'react';
import {Container, Row,Col} from 'react-bootstrap';
import './Main_content.css';
import Sidebar from "./Sidebar";

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            option: "Proj"
        };
        // console.log(this.state.option);
    }
    render() {
        return (
            <div className="Projects-wrap">
                <Container className="Projects">
                    <Row>
                        <Col lg={1} className="Sidebar-area">
                            <Sidebar choice={this.state.option}/>
                        </Col>
                        <Col lg={11}>
                            <h1 className="Title">Other Projects</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Projects;
