/*Component called after continue button, also contains Vanta.js integration*/

import React, {Component} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import {Link} from "react-router-dom";
import './Options.css';
import Header from "./Header";
import NET from '../Vanta/vanta.net.js';

class Options extends Component {
    /*Backend code for Vanta.js*/
    constructor() {
        super();
        this.myRef = React.createRef()
    }
    componentDidMount() {
        this.effect = NET({
            el: this.myRef.current,
            color: 0xffffff,
            backgroundColor: 0x2a2c2f,
            points: 11.00
        })
    }
    componentWillUnmount() {
        if (this.effect) this.effect.destroy()
    }

    render() {
        return (
            <div className="Options">
                {/*Div for Vanta.js*/}
                <div className="BG-animation" ref={this.myRef} />
                <Header/>
                <Container className="Categories-wrap" fluid={true}>
                    <Row className="Categories">
                        <Col lg={4} md={4} sm={4} xs={4} className="Categories-col">
                            <Link to="/Photography"><Image src="assets/Photo.png" className="Photo" fluid roundedCircle/></Link>
                            <label className="label">Photography</label>
                        </Col>
                        <Col lg={4} md={4} sm={4} xs={4} className="Categories-col">
                            <Link to="/Programming"><Image src="assets/Dev.png" className="Prog" fluid roundedCircle/></Link>
                            <label className="label">Programming</label>
                        </Col>
                        <Col lg={4} md={4} sm={4} xs={4} className="Categories-col">
                            <Link to="/Projects" ><Image src="assets/Other.png" className="Other" fluid roundedCircle/></Link>
                            <label className="label" id="project">Project Management</label>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Options;
