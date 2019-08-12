import React from 'react';

import './CloseDrawerButton.css'

const CloseDrawerButton = props => (
    <button className="Close-btn" onClick={props.close}>
        <div className="Close-btn-line" />
        <div className="Close-btn-line" />
    </button>
);

export default CloseDrawerButton;