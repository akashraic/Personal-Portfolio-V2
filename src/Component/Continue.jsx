/*Component for home page of website, Uses Vanta.js Integration*/

import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import './Home.jsx'
import './Continue.css';
import {Link} from "react-router-dom";
import Header from "./Header";
import NET from '../Vanta/vanta.net.js';


class Continue extends Component {

    /*All methods for Vanta.js Integration*/
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
            <div className="Continue">
                {/*div for Vanta.js*/}
                <div ref={this.myRef} className="BG-animation" />
                {/*Calls title Component*/}
                <Header/>
                <Container>
                    <Row className="btn-wrapper-wrap">
                        <Col lg={4}/>
                        <Col lg={4} className="btn-wrapper">
                            <Link to='/Options' className={"anchor"}><Button className="btn" block>Continue</Button></Link>
                        </Col>
                        <Col lg={4}/>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Continue;
