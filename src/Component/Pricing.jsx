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
                            <p className="Pricing-Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </Col>
                        <Col lg={2}/>
                    </Row>

                    <Row className="Pricing-table">
                        <Col>
                            <h1 className="Price-title">Photography Packages</h1>
                        </Col>
                        <Col lg={3} className="Pricing-option">
                            <h1 className="Pricing-title">Ui design</h1>
                            <hr/>
                            <p className="Pricing-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente harum
                                voluptatum, sit cum voluptatibus inventore quae qui provident eveniet dicta at,
                                quibusdam ipsam iusto reprehenderit hic saepe nesciunt sed illo.</p>
                            <hr/>
                            <div className="Price">
                                    <span className="Price">199 <b>CAD</b></span>
                            </div>
                        </Col>
                        <Col lg={3} className="Pricing-option">
                            <h1 className="Pricing-title">Ui design</h1>
                            <hr/>
                            <p  className="Pricing-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente harum
                                voluptatum, sit cum voluptatibus inventore quae qui provident eveniet dicta at,
                                quibusdam ipsam iusto reprehenderit hic saepe nesciunt sed illo.</p>
                            <hr/>
                            <div className="Price">
                                    <span className="Price">199 <b>CAD</b></span>
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
                                    <span className="Price">199 <b>CAD</b></span>
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
                                    <span className="Price">199 <b>CAD</b></span>
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
                                    <span className="Price">199 <b>CAD</b></span>
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
                                    <span className="Price">199 <b>CAD</b></span>
                            </div>
                        </Col>
                        <Col lg={3}/>
                    </Row>
                    <Row className="btn-wrapper-wrap">
                        <Col lg={4}/>
                        <Col lg={4} className="btn-wrapper">
                            {/*<Button className="btn" block onClick={this.changeState}>Continue</Button>*/}
                            <Link to='/Contact' className={"anchor"}><Button className="btn" block>Contact</Button></Link>
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