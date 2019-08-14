import React, {Component} from 'react';

import './ModalGallery.css';
import CloseDrawerButton from "../SideDrawer/CloseDrawerButton";
import {Image} from 'react-bootstrap';

class ModalGallery extends Component {
    render(){
        if (this.props.isOpen === false) {
            return null;
        }
        return(
            <div className="Modal">
                <CloseDrawerButton close={this.props.hide} className="close" />
                <div className="Modal-body">
                    <Image src={this.props.src} onClick={this.props.hide}/>
                </div>
            </div>
        );
    }
}

export default ModalGallery;