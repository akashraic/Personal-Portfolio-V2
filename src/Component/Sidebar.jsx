import React, {Component} from 'react';
import {Link } from "react-router-dom";
import './Sidebar.css';
import Home from './Home.jsx';
import {Route} from "react-router";
import Photography from "./Photography";
import Options from "./Options";
import CloseDrawerButton from "./SideDrawer/CloseDrawerButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import {faFilePdf} from "@fortawesome/free-solid-svg-icons/faFilePdf";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faGithubSquare} from "@fortawesome/free-brands-svg-icons/faGithubSquare";
import Pdf from "../../src/pdf/Akash_Rai_Chhabria_2019_01_13.pdf";


// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
    {
        label: "Cars",
        path: "/Photography",
        exact: true,
        option: "Photo",
        fire_path: "Photo Gallery/Cars",
        // sidebar: () => ,
        main: () => <Home/>
    },
    {
        label: "Concert",
        path: "/Photography",
        option: "Photo",
        fire_path: "Photo Gallery/Concert",
        // sidebar: () => <div>bubblegum!</div>,
        main: () => <Photography/>
    },
    {
        label: "Events",
        path: "/Photography",
        option: "Photo",
        fire_path: "Photo Gallery/Event",
        // sidebar: () => <div>shoelaces!</div>,
        main: () => <Options/>
    },
    {
        label: "Headshots",
        path: "/Photography",
        option: "Photo",
        fire_path: "Photo Gallery/Headshots",
        // sidebar: () => <div>shoelaces!</div>,
        main: () => <Options/>
    },
    {
        label: "Landscape",
        path: "/Photography",
        option: "Photo",
        fire_path: "Photo Gallery/Landscape",
        // sidebar: () => <div>shoelaces!</div>,
        main: () => <Options/>
    },
    {
        label: "Portraits",
        path: "/Photography",
        option: "Photo",
        fire_path: "Photo Gallery/Portraits",
        // sidebar: () => <div>shoelaces!</div>,
        main: () => <Options/>
    },
    {   label: "Street",
        path: "/Photography",
        option: "Photo",
        fire_path: "Photo Gallery/Street",
        // sidebar: () => <div>shoelaces!</div>,
        main: () => <Options/>
    },
    {   label: "Holisitc Bodies",
        path: "/Programming",
        option: "Prog",
        fire_path: "Programming/Holistic.png",
        // sidebar: () => <div>shoelaces!</div>,
        // main: () => <p>yo</p>,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {   label: "Gifting Guru",
        path: "/Programming",
        option: "Prog",
        fire_path: "Programming/Gifting.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        // sidebar: () => <div>shoelaces!</div>,
        main: () => <Options/>
    },
    {   label: "Drone and City Simulator",
        path: "/Programming",
        option: "Prog",
        fire_path: "Programming/Drone.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        // sidebar: () => <div>shoelaces!</div>,
        main: () => <Options/>
    },
    {   label: "Battle of the Bands",
        path: "/Programming",
        option: "Prog",
        fire_path: "Programming/BOTB.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        // sidebar: () => <div>shoelaces!</div>,
        main: () => <Options/>
    },
    {   label: "Battle of the Bands (Marketing Lead)",
        path: "/Photography",
        option: "Proj",
        // sidebar: () => <div>shoelaces!</div>,
        main: () => <Options/>
    },
    {   label: "Battle of the Bands (Event Organizer)",
        path: "/Photography",
        option: "Proj",
        // sidebar: () => <div>shoelaces!</div>,
        main: () => <Options/>
    },
    {   label: "Musicians@Ryerson",
        path: "/Photography",
        option: "Proj",
        // sidebar: () => <div>shoelaces!</div>,
        main: () => <Options/>
    },
];


class Sidebar extends Component {

        constructor(props) {
            super(props);

            this.state = {
                option: " ",
                choice: " ",
                action: " ",
            };
        }

/*    onClick(path, description) {
        this.props.action(path);
        this.props.description(description);
    }*/

    render() {
            let drawerClasses = 'Sidebar';
            if(this.props.show) {
                drawerClasses = 'Sidebar open';
            }
        return (
                <div className={drawerClasses}>
                    <div><CloseDrawerButton close={this.props.hide}/></div>
                    <ul className="nav-list">
                        <div className="sm-wrapper">
                        {routes.filter(routes => routes.option === this.props.choice).map((route, index) => (
                        <li className="list">
                            <Link key={index} to={route.path} className="list-anchor" onClick={() => {this.props.action(route.fire_path); this.props.description(route.description);}}>{route.label} </Link>
                        </li>
                        ))}
                        </div>

                        <div className="spacer"/>

                        <div className="Info-wrapper">
                            <li className="Lower-list">
                                <Link to="/Pricing" className="list-anchor">Pricing</Link>
                            </li>
                            <li className="Lower-list">
                                <Link to="/About" className="list-anchor">About</Link>
                            </li>
                            <li className="Lower-list">
                                <Link to="/Contact" className="list-anchor">Contact</Link>
                            </li>
                        </div>

                        <div className="Social-wrapper">
                            <li className="Social-list">
                                <a href={Pdf} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="far fa-file-pdf" icon={faFilePdf} /></a>
                            </li>
                            <li className="Social-list">
                                <a href={"https://www.instagram.com/akashrai_10/"} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="instant fa-fw" icon={faInstagram} /></a>
                            </li>
                            <li className="Social-list">
                                <a href={"https://www.linkedin.com/in/akash-chhabria/"} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fab fa-linkedin" icon={faLinkedin}/></a>
                            </li>
                            <li className="Social-list">
                                <a href={"https://github.com/muztank10/"} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fab fa-github-square" icon={faGithubSquare}/></a>
                            </li>
                        </div>
                    </ul>
                </div>
        );
    }
}

export default Sidebar;
