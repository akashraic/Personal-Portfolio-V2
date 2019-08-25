import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap"; /*react-bootstrap is used for better formatting and responsiveness of website: https://react-bootstrap.github.io/ */
import './Footer.css';
import {Link} from "react-router-dom";

class Foot extends Component {
    render() {
        return (
            <div className="Foot fixed-bottom">
                    {/*contains the LLC code and the terms link*/}
                    <Row className="footer">
                        <Col md={4} sm={3} />
                        <Col md={4} sm={6} className="foot">
                            {/*this code retrieves the year and updates it automatically*/}
                            <ul className="Foot-list list-unstyled horizontal">
                                <li><Link to="/" className="link">Home</Link></li>
                                <li><Link to="/Photography" className="link">Photography</Link></li>
                                <li><Link to="/Programming" className="link">Programming</Link></li>
                                <li><Link to="/Projects" className="link">Project Management</Link></li>
                                {/*<li><Link to="/Pricing" className="link">Pricing</Link></li>*/}
                                <li><Link to="/About" className="link">About me</Link></li>
                            </ul>
                            <h5 className="footer-copyright developer-copyright">&copy; {(new Date().getFullYear())} Akash Rai Chhabria</h5>
                        </Col>
                        <Col md={4} sm={3} />
                    </Row>
            </div>
        )
    }

}

export default Foot;