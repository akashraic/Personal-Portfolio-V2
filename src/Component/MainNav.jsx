import React, {Component} from 'react';
import {Container, Row, Col, Image, Nav, NavItem} from 'react-bootstrap'; /*react-bootstrap is used for better formatting and responsiveness of website: https://react-bootstrap.github.io/ */
import './MainNav.css';

class MainNav extends Component {
    render() {
        return (
            <Container>
                {/*contains the logo and text for the head*/}
                <Row className="show-grid text-center Heading">
                    <Col md={3} xs={0}/>
                    <Col className="Head-wrap-1" md={2} xs={4}>
                        <h1 className="Head-1">AKASH</h1>
                    </Col>
{/*                    <Col className="Logo-wrapper" md={2} xs={4}>
                        <Image src="/assests/Main_Logo.png" circle className="logo"/>
                    </Col>*/}
                    <Col className="Head-wrap-2" md={2} xs={4}>
                        <h1 className="Head-2">RAI</h1>
                    </Col>
                    <Col md={3} xs={0}/>
                </Row>
                {/*uses the Nav tag and creates a fixed position nav bar under the logo*/}
                <Row className="show-grid text-center Menu-row">
                    <Col md={2}/>
                    <Col md={8} className="Menu-items">
                        <Nav bsStyle="pills" justified className="Items">
                            <NavItem eventKey={1} className="nav-link" href="#Home">Home</NavItem>
                            <NavItem eventKey={3} className="nav-link" href="#">Photography</NavItem>
                            <NavItem eventKey={4} className="nav-link" href="#">Programming</NavItem>
                            <NavItem eventKey={5} className="nav-link" href="#">Projects</NavItem>
                            <NavItem eventKey={2} className="nav-link" href="#">About</NavItem>
                            <NavItem eventKey={7} className="nav-link" href="#">Contact</NavItem>
                            <NavItem eventKey={8} className="nav-link"  href="#">Consultation</NavItem>
                        </Nav>
                    </Col>
                    <Col md={2}/>
                </Row>
                <hr/>
            </Container>
        );
    }
}

export default MainNav;
