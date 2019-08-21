import React, {Component} from 'react';

import './About.css';
import {Col, Container, Image, Row} from "react-bootstrap";
import * as THREE from 'three';

class About extends Component {
    componentDidMount() {
        const scene = new THREE.Scene();
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
    }
    render(){
        return(
            <div className="About-wrap">
                <Container className="About">
{/*                    <Row>
                        <Col>
                            <h1 className="Title">About me</h1>
                        </Col>
                    </Row>*/}
{/*                    <Row>
                        <Col lg={6}>
                            <Image className="Akash one" src="assets/Akash_one.jpg"/>
                        </Col>
                        <Col lg={6}>
                            <Image className="Akash two" src="assets/Akash_two.jpg"/>
                        </Col>
                    </Row>*/}
                    <Row>
                        <Col lg={6}>
                            <h1 className="Title-name">About me</h1>
                            <p className="Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </Col>
                        <Col lg={6} className="Three-wrap">
                            <div className="Skills">
                                <ul className="Skills-list">
                                    <li className="Skills-list-items">Photography</li>
                                    <li className="Skills-list-items">Git</li>
                                    <li className="Skills-list-items">React</li>
                                    <li className="Skills-list-items">OOP</li>
                                    <li className="Skills-list-items">Project Management</li>
                                    <li className="Skills-list-items">Full-Stack Development</li>
                                </ul>
                            </div>
                            <div className="Three" ref={ref => (this.mount = ref)} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default About;
;