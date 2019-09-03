/*Creates a backdrop when the sidebar is open to close the sidebar when clicked on*/

import React from 'react';
import './Backdrop.css'

const Backdrop = props => (
        <div className="Backdrop" onClick={props.click}/>
);

export default Backdrop;