/*Component to create Arrow graphic in order to cycle through pictures in the Modal display*/

import React from 'react';
import './Arrow.css'

/*direction determines whether the arrow is a left or right arrow and styles it accordingly*/
const Arrow = ({direction, clickFunction}) => (
    <button className={direction} onClick={clickFunction}>
        <div className="Arrow-line a1" />
        <div className="Arrow-line a2" />
    </button>
);

export default Arrow;