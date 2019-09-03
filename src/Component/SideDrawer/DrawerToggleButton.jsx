/*Hamburger menu component to open the sidebar*/

import React from 'react';
import './DrawerToggleButton.css'

//Props called from Toolbar.jsx
const DrawerToggleButton = props => (
    <button className="Toggle-btn" onClick={props.click}>
        <div className="Toggle-btn-line line1" />
        <div className="Toggle-btn-line line2" />
        <div className="Toggle-btn-line line3" />
    </button>
);

export default DrawerToggleButton;