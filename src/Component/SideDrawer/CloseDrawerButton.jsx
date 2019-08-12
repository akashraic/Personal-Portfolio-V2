import React from 'react';

import './CloseDrawerButton.css'

const CloseDrawerButton = props => (
    <button className="Close-btn" onClick={props.close}>
        <div className="Close-btn-line btn1" />
        <div className="Close-btn-line btn2" />
    </button>
);

export default CloseDrawerButton;