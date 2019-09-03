/*Component to contain hamburger menu (for sidebar) and other navigation options*/

import React from 'react';
import {Link} from "react-router-dom";
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

//Calls Drawer Toggle Button
const Toolbar = props => (
    <header className="Toolbar">
        <nav className="Toolbar-nav">
            <div>
                <DrawerToggleButton click={props.drawerClick}/>
            </div>
            <div className="Toolbar-logo"><Link to="/">Akash Rai</Link></div>
            {/*Creates space between logo and Navigation items*/}
            <div className="spacer"/>
            <div className="Toolbar-nav">
                <ul className="Toolbar-nav-list">
                    <li className="Toolbar-nav-items"><Link className="Toolbar-links" to="/Photography" onClick={() => props.path("Photo Gallery/Best")}>Photography</Link></li>
                    <li className="Toolbar-nav-items"><Link className="Toolbar-links" to="/Programming" onClick={() => props.path(" ")}>Programming</Link></li>
                    <li className="Toolbar-nav-items"><Link className="Toolbar-links" to="/Projects">Project Management</Link></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;