import React, {Component} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import './Home.css';

class Options extends Component {
    render() {
        return (
            <div className="Options">
                <Container>
                    <Row className="Categories">
                        <Col lg={4}>
                            <Image src="assets/Photo.png" className="Photography" fluid roundedCircle>Akash Rai</Image>
                        </Col>
                        <Col lg={4}>
                            <Image src="assets/Prog.png" className="Programming" fluid roundedCircle>Akash Rai</Image>
                        </Col>
                        <Col lg={4}>
                            <Image src="assets/Other.png" className="Other" fluid roundedCircle>Akash Rai</Image>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default Options;
