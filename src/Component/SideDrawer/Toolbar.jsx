import React from 'react';
import {Link} from "react-router-dom";

const Toolbar = props => (
    <header className="Toolbar">
        <nav className="Toolbar-nav">
            <div></div>
            <div className="Toolbar-logo"><Link to="/">Akash Rai</Link></div>
            <div className="Toolbar-navs">
                <ul className="Toolbar-nav-list">
                    <li className="Toolbar-nav-items"><Link to="/Photography">Photography</Link></li>
                    <li className="Toolbar-nav-items"><Link to="/Photography">Photography</Link></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;