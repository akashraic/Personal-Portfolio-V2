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
        path: "/Photography",
        option: "Prog",
        // sidebar: () => <div>shoelaces!</div>,
        main: () => <Options/>
    },
    {   label: "Gifting Guru",
        path: "/Photography",
        option: "Prog",
        // sidebar: () => <div>shoelaces!</div>,
        main: () => <Options/>
    },
    {   label: "Battle of the Bands",
        path: "/Photography",
        option: "Prog",
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

            console.log(this.props.choice);
            console.log(this.props.action);
        }

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
                            <Link key={index} to={route.path} className="list-anchor" onClick={() => this.props.action(route.fire_path)}>{route.label} </Link>
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

                    {routes.map((route, index) => (
                        // You can render a <Route> in as many places
                        // as you want in your app. It will render along
                        // with any other <Route>s that also match the URL.
                        // So, a sidebar or breadcrumbs or anything else
                        // that requires you to render multiple things
                        // in multiple places at the same URL is nothing
                        // more than multiple <Route>s.
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.sidebar}
                        />
                    ))}


{/*                <div>
                    {routes.map((route, index) => (
                        // Render more <Route>s with the same paths as
                        // above, but different components this time.
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.main}
                        />
                    ))}
                </div>*/}
                </div>
        );
    }
}

export default Sidebar;
