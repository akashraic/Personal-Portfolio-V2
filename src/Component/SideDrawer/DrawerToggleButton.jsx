import React from 'react';

import './DrawerToggleButton.css'

const DrawerToggleButton = props => (
    <button className="Toggle-btn" onClick={props.click}>
        <div className="Toggle-btn-line line1" />
        <div className="Toggle-btn-line line2" />
        <div className="Toggle-btn-line line3" />
    </button>

);

export default DrawerToggleButton;