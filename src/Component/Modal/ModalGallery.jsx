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
        let img = this.props.src;
        const style_1 = {
            background: 'url('+img+')',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            filter: 'blur(40px) brightness(80%)',
            backgroundRepeat: 'no-repeat',
            width: '300%',
            height: '300%',
            margin: '-100px'
        };
        return(
            <div className="Modal">
                <div className="Modal-background" style={style_1}/>
                <CloseDrawerButton close={this.props.hide} className="close" />
                <Arrow direction="right" clickFunction={this.props.next}/>
                <Arrow direction="left" clickFunction={this.props.previous}/>
                <div className="Modal-body">
                    <Image src={this.props.src} onClick={this.props.hide} className="Modal-image" />
                </div>
                <label className="Image-num">{this.props.index+1}/{this.props.max+1}</label>
            </div>
        );
    }
}

export default ModalGallery;