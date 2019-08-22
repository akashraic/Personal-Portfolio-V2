import React, {Component} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import {BrowserRouter as Router, Link} from "react-router-dom";
import './Options.css';
import Header from "./Header";
import RINGS from './vanta.net.js';

class Options extends Component {

/*    constructor() {
        super();

        this.state = {
            option : ''
        };

        this.handleClickPhoto = this.handleClickPhoto.bind(this);
        this.handleClickProg = this.handleClickProg.bind(this);
        this.handleClickProj = this.handleClickProj.bind(this);
    }

    handleClickPhoto() {
        this.setState({option: "Photo"});
        console.log(this.state.option);
    }
    handleClickProg() {
        this.setState({option: "Prog"});
        console.log(this.state.option);
    }
    handleClickProj() {
        this.setState({option: "Proj"});
        console.log(this.state.option);
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
            <div className="BG-animation" ref={this.myRef}>
            <div className="Options">
                <Header/>
                <Container className="Categories-wrap">
                    <Row className="Categories">
                        <Col lg={4}>
                            {/*<Link to="/Photography" onClick={this.handleClickPhoto}><Image src="assets/Photo.png" className="Photography" fluid roundedCircle/></Link>*/}
                            <Link to="/Photography"><Image src="assets/Photo.png" className="Photo" fluid roundedCircle/></Link>
                            <label className="label">Photography</label>
                        </Col>
                        <Col lg={4}>
                            {/*<Link to="/Programming" onClick={this.handleClick("prog")}><Image src="assets/Dev.png" className="Programming" fluid roundedCircle/></Link>*/}
                            <Link to="/Programming"><Image src="assets/Dev.png" className="Prog" fluid roundedCircle/></Link>
                            <label className="label">Programming</label>
                        </Col>
                        <Col lg={4}>
                            {/*<Link to="/Projects" onClick={this.handleClick("proj")}><Image src="assets/Other.png" className="Other" fluid roundedCircle/></Link>*/}
                            <Link to="/Projects" ><Image src="assets/Other.png" className="Other" fluid roundedCircle/></Link>
                            <label className="label" id="project">Project Management</label>
                        </Col>
                    </Row>

               </Container>
            </div>
            </div>
        );
    }
}

export default Options;
