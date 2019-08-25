import React, {Component} from 'react';

import './About.css';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import * as THREE from 'three';
import {Link} from "react-router-dom";
import Footer from "./Footer/Footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import {faFilePdf} from "@fortawesome/free-solid-svg-icons/faFilePdf";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faGithubSquare} from "@fortawesome/free-brands-svg-icons/faGithubSquare";
import Pdf from "../../src/pdf/Akash_Rai_Chhabria_2019_01_13.pdf";

class About extends Component {
   /* componentDidMount() {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x2a2c2f);
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth/2, window.innerHeight/2);
        this.mount.appendChild(renderer.domElement);

        const geometry = new THREE.DodecahedronBufferGeometry(3, 0);
        const material = new THREE.MeshBasicMaterial({ color: 0xFFFF });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        const animate = function() {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        animate();
    }*/
    render(){
        return(
            <div className="About-wrap">
                <Container className="About">
                    <Row>
                        <Col>
                            <h1 className="Title-about">About me</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <p className="Text">
                                I am a 4th Computer Science student at Ryerson University in Toronto, Ontario. I consider myself to be an individual who possess both technical knowledge and design theory. My goal is to combine these 2 aspects and present them in all my projects. Currently I am looking for an internship, to work on development projects (website or other) and to help people with their photography needs.
                                <br />
                                <br />
                                My value as a developer is in that not only do I have the technical skills to execute a project, but I also have the design knowledge to create a visually appealing and clean design for your viewership to appreciate. I have worked as a photographer for 3 years, I have experience shooting concerts, events, portraits, and headshots for all sorts of clients. One of them being the Department of Fashion at Ryerson.
                                <br />
                                <br />
                                    I also have other interests besides Photography and Computer Science. I am a big fan of music and have been heavily involved in the Ryerson and Toronto music scene. Working on not only the music side, but also the business of it. When I’m not enjoying some music, you’ll find me working on my fitness, or on my relationships.
                                <br />
                                <br />
                                    I hope we meet soon to talk about your new project ideas!
                            </p>
                            <h2 className="Text Head">Contact:</h2>
                            <p className="Text two">
                                For general inquiries and pricing
                                <br />
                                Please email me at:
                                <br />
                                <a href="mailto:akashrai10.ar10@gmail.com">akashrai10.ar10@gmail.com</a>
                                <br />
                                Or find me on the following social media:
                                <br />
                                <div className="Social-wrapper">
                                    <li className="Social-list-about">
                                        <a href={Pdf} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="far fa-file-pdf" icon={faFilePdf} /></a>
                                    </li>
                                    <li className="Social-list-about">
                                        <a href={"https://www.instagram.com/akashrai_10/"} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="instant fa-fw" icon={faInstagram} /></a>
                                    </li>
                                    <li className="Social-list-about">
                                        <a href={"https://www.linkedin.com/in/akash-chhabria/"} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fab fa-linkedin" icon={faLinkedin}/></a>
                                    </li>
                                    <li className="Social-list-about">
                                        <a href={"https://github.com/muztank10/"} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fab fa-github-square" icon={faGithubSquare}/></a>
                                    </li>
                                </div>
                            </p>
                        </Col>
                        <Col lg={6} className="Image-wrap">
                            {/*<div className="Skills">
                                <ul className="Skills-list">
                                    <li className="Skills-list-items">Photography</li>
                                    <li className="Skills-list-items">Git</li>
                                    <li className="Skills-list-items">React</li>
                                    <li className="Skills-list-items">OOP</li>
                                    <li className="Skills-list-items">Project Management</li>
                                    <li className="Skills-list-items">Full-Stack Development</li>
                                </ul>
                            </div>
                            <div className="Three" ref={ref => (this.mount = ref)}>
                            </div>*/}
                            <Image className="About-Akash one" src="assets/Akash_two.JPG"/>
                        </Col>
                    </Row>
                    <Row className="btn-wrapper-wrap-about">
                        <Col lg={4}/>
                        <Col lg={4} className="btn-wrapper">
                            {/*<Button className="btn" block onClick={this.changeState}>Continue</Button>*/}
                            <Link to='/' className={"anchor"}><Button className="btn" block>Return Home</Button></Link>
                        </Col>
                        <Col lg={4}/>
                    </Row>
                    <Footer/>
                </Container>
            </div>
        );
    }
}

export default About;
