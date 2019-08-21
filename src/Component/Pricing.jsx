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
                        <Col className="Pricing-text-wrap">
                            <p className="Pricing-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </Col>
                    </Row>
                    <Row className="btn-wrapper-wrap">
                        <Col lg={4}/>
                        <Col lg={4} className="btn-wrapper">
                            {/*<Button className="btn" block onClick={this.changeState}>Continue</Button>*/}
                            <Link to='/Pricing' className={"anchor"}><Button className="btn" block>Pricing</Button></Link>
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