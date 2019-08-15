import React from 'react';
import {Link} from "react-router-dom";
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const Toolbar = props => (
    <header className="Toolbar">
        <nav className="Toolbar-nav">
            <div>
                <DrawerToggleButton click={props.drawerClick}/>
            </div>
            <div className="Toolbar-logo"><Link to="/Photography" onClick={() => props.path("Photo Gallery/Best")}>Akash Rai</Link></div>
            <div className="spacer"/>
            <div className="Toolbar-navs">
                <ul className="Toolbar-nav-list">
                    <li className="Toolbar-nav-items"><Link clasName="Toolbar-links" to="/Photography" onClick={() => props.path("Photo Gallery/Best")}>Photography</Link></li>
                    <li className="Toolbar-nav-items"><Link clasName="Toolbar-links" to="/Programming">Programming</Link></li>
                    <li className="Toolbar-nav-items"><Link clasName="Toolbar-links" to="/Projects">Project Management</Link></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;