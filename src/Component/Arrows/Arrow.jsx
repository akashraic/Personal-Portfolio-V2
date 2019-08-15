import React from 'react';

import './Arrow.css'

const Arrow = ({direction, clickFunction}) => (
    <button className={direction} onClick={clickFunction}>
        <div className="Arrow-line a1" />
        <div className="Arrow-line a2" />
    </button>
);

export default Arrow;