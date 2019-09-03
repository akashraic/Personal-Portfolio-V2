/*Component for Footer which includes navigation and copyright*/

import React, {Component} from 'react';
/*react-bootstrap is used for better formatting and responsiveness of website: https://react-bootstrap.github.io/ */
import {Col, Row} from "react-bootstrap";
import './Footer.css';
import {Link} from "react-router-dom";

class Foot extends Component {
    render() {
        return (
            <div className="Foot fixed-bottom">
                    {/*contains the LLC code and the terms link*/}
                    <Row className="footer">
                        <Col lg={4} md={4} sm={4} />
                        <Col lg={4} md={4} sm={4} className="Foot">
                            {/*this code retrieves the year and updates it automatically*/}
                            <ul className="Foot-list horizontal">
                                <li><Link to="/" className="link">Home</Link></li>
                                <li><Link to="/Photography" className="link">Photography</Link></li>
                                <li><Link to="/Programming" className="link">Programming</Link></li>
                                <li><Link to="/Projects" className="link">Project Management</Link></li>
                                <li><Link to="/About" className="link">About me</Link></li>
                            </ul>
                            <h5 className="footer-copyright">&copy; {(new Date().getFullYear())} Akash Rai Chhabria</h5>
                        </Col>
                        <Col lg={4} md={4} sm={4} />
                    </Row>
            </div>
        )
    }

}

export default Foot;