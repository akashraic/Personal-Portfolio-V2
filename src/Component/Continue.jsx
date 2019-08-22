import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import './Home.jsx'
import './Continue.css';
import {Link} from "react-router-dom";
import Header from "./Header";
import * as THREE from 'three';
import RINGS from './vanta.net.js';


class Continue extends Component {

    /*    constructor(props) {
            super(props);

            this.state = {
                cont: false
            };

            this.changeState = this.changeState.bind(this)
        }

        changeState() {
            this.props.choice(this.state.cont);
            console.log()
        }*/

    constructor() {
        super();
        this.myRef = React.createRef()
    }
    componentDidMount() {
        this.effect = RINGS({
            el: this.myRef.current,
            color: 0xffffff,
            backgroundColor: 0x2a2c2f,
        })
    }
    componentWillUnmount() {
        if (this.effect) this.effect.destroy()
    }


    render() {
        return (
            <div ref={this.myRef} className="BG-animation">
            <div className="Continue">
                <Header/>
                <Container>
                    <Row className="btn-wrapper-wrap">
                        <Col lg={4}/>
                        <Col lg={4} className="btn-wrapper">
                            {/*<Button className="btn" block onClick={this.changeState}>Continue</Button>*/}
                            <Link to='/Options' className={"anchor"}><Button className="btn" block>Continue</Button></Link>
                        </Col>
                        <Col lg={4}/>
                    </Row>
                </Container>
            </div>
            </div>
        );
    }
}

export default Continue;
