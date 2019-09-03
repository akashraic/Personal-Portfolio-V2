/*Component to create a modal view of pictures when clicked in Photography.jsx*/

import React, {Component} from 'react';
import './ModalGallery.css';
import CloseDrawerButton from "../SideDrawer/CloseDrawerButton";
import {Image} from 'react-bootstrap';
import Arrow from "../Arrows/Arrow";

class ModalGallery extends Component {
    render(){
        // Will not render if a picture is not clicked, isOpen passed from Photography.jsx
        if (this.props.isOpen === false) {
            return null;
        }
        // places a copy the current image (on the modal) to the background to create an interesting background
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
            //Calls Arrow and close drawer button, clickedFunction and close prop passed from Photography.jsx
            <div className="Modal">
                <div className="Modal-background" style={style_1}/>
                <CloseDrawerButton close={this.props.hide} className="close" />
                <Arrow direction="right" clickFunction={this.props.next} />
                <Arrow direction="left" clickFunction={this.props.previous}/>
                <div className="Modal-body">
                    <Image src={this.props.src} onClick={this.props.hide} className="Modal-image" />
                </div>
                {/*create a current index counter of the pictures*/}
                <label className="Image-num">{this.props.index+1}/{this.props.max+1}</label>
            </div>
        );
    }
}

export default ModalGallery;