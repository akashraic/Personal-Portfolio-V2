import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import './Home.jsx'
import './Continue.css';
import {Link} from "react-router-dom";

class Continue extends Component {

/*    constructor(props) {
        super(props);

        this.state = {
            cont: true
        };

        this.changeState = this.changeState.bind(this)
    }

    changeState() {
        this.props.choice(this.state.cont);
        console.log()
    }*/

    render() {
        return (
            <div className="Continue">
                <Container>
                    <Row className="btn-wrapper-wrap">
                        <Col lg={4}/>
                        <Col lg={4} className="btn-wrapper">
                            {/*<Button className="btn" block onClick={this.changeState}>Continue</Button>*/}
                            <Button className="btn" block><Link to='/Options'>Continue</Link></Button>
                        </Col>
                        <Col lg={4}/>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Continue;
