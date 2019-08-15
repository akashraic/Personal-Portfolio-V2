import React, {Component} from 'react';

import './ModalGallery.css';
import CloseDrawerButton from "../SideDrawer/CloseDrawerButton";
import {Image} from 'react-bootstrap';
import Arrow from "../Arrows/Arrow";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class ModalGallery extends Component {
    render(){
        if (this.props.isOpen === false) {
            return null;
        }
        return(
            <div className="Modal">
                <CloseDrawerButton close={this.props.hide} className="close" />
                <Arrow direction="right" clickFunction={this.props.next}/>
                <Arrow direction="left" clickFunction={this.props.previous}/>
                <div className="Modal-body">
                    <Image src={this.props.src} onClick={this.props.hide} className="Modal-image"/>
                </div>
                <label className="Image-num">{this.props.index+1}/{this.props.max+1}</label>
            </div>
        );
    }
}

export default ModalGallery;