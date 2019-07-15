import React, {Component} from 'react';
import {Container, Row, Col, Button, SafeAnchor as handleClick} from 'react-bootstrap';
import './Home.css';
import Continue from './Continue.jsx';
import Options from './Options.jsx'

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cont : false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({cont: true});
    }

    render() {

        const cont = this.state.cont;
        let button;

        if (cont) {
            button = <Options/>
        }

        else {
            button = <Continue choice={this.handleClick}/>
        }

        return (
            <div className="Home">
                <Container>
                    <Row className="Logo">
                        <Col lg={3}/>
                        <Col lg={6}>
                            <h1 className="Akash">Akash Rai</h1>
                        </Col>
                        <Col lg={3}/>
                    </Row>

{/*                    <Row className="btn-wrapper-wrap">
                        <Col lg={4}/>
                        <Col lg={4} className="btn-wrapper">
                            <Button className="btn" onClick={this.handleClick} block>Continue</Button>
                        </Col>
                        <Col lg={4}/>
                    </Row>*/}
                    {button}
                </Container>
            </div>
        );
    }
}

export default Home;
