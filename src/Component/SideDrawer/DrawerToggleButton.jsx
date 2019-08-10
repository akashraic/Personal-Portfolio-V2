import React from 'react';

import './DrawerToggleButton.css'

const DrawerToggleButton = props => (
    <button className="Toggle-btn" onClick={props.click}>
        <div className="Toggle-btn-line" />
        <div className="Toggle-btn-line" />
        <div className="Toggle-btn-line" />
    </button>

);

export default DrawerToggleButton;