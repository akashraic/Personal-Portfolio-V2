/*Styling for (unused) Pricing Component*/

import React, {Component} from 'react';
import './Pricing.css';
import {Button, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class Pricing extends Component {
    render(){
        return(
            <div className="Pricing-wrap">
                <Container className="Pricing">
                    <Row>
                        <Col>
                            <h1 className="Title">Pricing</h1>
                        </Col>
                        <Col lg={2}/>
                        <Col lg={8} className="Pricing-description-wrap">
                            <p className="Pricing-Description">Welcome to the Pricing section! the prices given below are for pre-made packages, custom packages are also available on request. If you would like to hire me for work not listed in the packages below then please contact me with details of your project! </p>
                        </Col>
                        <Col lg={2}/>
                    </Row>
                    <Row className="Pricing-table">
                        <Col>
                            <h1 className="Price-title">Photography Packages</h1>
                        </Col>
                        <Col lg={3} className="Pricing-option">
                            <h1 className="Pricing-title">Linkedin Package</h1>
                            <hr/>
                            <p className="Pricing-text">The shoot will take place with one outfit and in one location, I will provide <u>5 photos</u> delivered to you within a week.</p>
                            <hr/>
                            <div className="Price">
                                    <span className="Price">Blank <b>CAD</b></span>
                            </div>
                        </Col>
                        <Col lg={3} className="Pricing-option">
                            <h1 className="Pricing-title">Concert Package</h1>
                            <hr/>
                            <p  className="Pricing-text">Will provide pictures of the band playing and photos of the crowd. I will provide <u>20 photos</u> delivered to you within 2 weeks .</p>
                            <hr/>
                            <div className="Price">
                                    <span className="Price">Blank<b>CAD</b></span>
                            </div>
                        </Col>
                        <Col lg={3} className="Pricing-option">
                            <h1 className="Pricing-title">Portrait Package</h1>
                            <hr/>
                            <p className="Pricing-text">The shoot will take place in one location with two outfits, I will provide <u>5-10 photos</u> delivered to you within a week. </p>
                            <hr/>
                            <div className="Price">
                                    <span className="Price">Blank <b>CAD</b></span>
                            </div>
                        </Col>
                        <Col lg={3} className="Pricing-option">
                            <h1 className="Pricing-title">Pay per Photo</h1>
                            <hr/>
                            <p className="Pricing-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente harum
                                voluptatum, sit cum voluptatibus inventore quae qui provident eveniet dicta at,
                                quibusdam ipsam iusto reprehenderit hic saepe nesciunt sed illo.</p>
                            <hr/>
                            <div className="Price">
                                    <span className="Price">Blank<b>CAD</b></span>
                            </div>
                        </Col>
                    </Row>
                    <Row className="Pricing-table">
                        <Col>
                            <h1 className="Price-title">Programming Packages</h1>
                        </Col>
                        <Col lg={3}/>
                        <Col lg={3} className="Pricing-option">
                            <h1 className="Pricing-title">Ui design</h1>
                            <hr/>
                            <p className="Pricing-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente harum
                                voluptatum, sit cum voluptatibus inventore quae qui provident eveniet dicta at,
                                quibusdam ipsam iusto reprehenderit hic saepe nesciunt sed illo.</p>
                            <hr/>
                            <div className="Price">
                                    <span className="Price">Blank <b>CAD</b></span>
                            </div>
                        </Col>
                        <Col lg={3} className="Pricing-option">
                            <h1 className="Pricing-title">Ui design</h1>
                            <hr/>
                            <p className="Pricing-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente harum
                                voluptatum, sit cum voluptatibus inventore quae qui provident eveniet dicta at,
                                quibusdam ipsam iusto reprehenderit hic saepe nesciunt sed illo.</p>
                            <hr/>
                            <div className="Price">
                                    <span className="Price">Blank<b>CAD</b></span>
                            </div>
                        </Col>
                        <Col lg={3}/>
                    </Row>
                    <Row className="btn-wrapper-wrap">
                        <Col lg={4}/>
                        <Col lg={4} className="btn-wrapper">
                            <Link to='/About' className={"anchor"}><Button className="btn" block>Learn About me</Button></Link>
                        </Col>
                        <Col lg={4}/>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Pricing;
;