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
        git: "https://github.com/muztank10/holistic-bodies/blob/master/public/index.html",
        website: "https://holisticbodies.ca/",
        specs: "Home, About, Contact, Social media, Mailchimp subscription form built in, Google Blog integration, Merchandise store embedded in website, User traffic tracking",
        techStack: " ReactJs Framework, NOde.js, Ecwid, React-Bootstrap, MailChimp API, Firebase Hosting, Google Analytics  ",
        time: "4 Months",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {   label: "Gifting Guru",
        path: "/Programming",
        option: "Prog",
        fire_path: "Programming/Gifting.png",
        git: "https://github.com/muztank10/GiftingGuru",
        website: "https://www.giftinggurucorporate.com/",
        specs: "Home, About, Contact, User input form, Displays recommendations from algorithm",
        techStack: " HTML, CSS, PHP, MySQL, JavaScript, Google Analytics ",
        time: "3 Months",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {   label: "Drone and City Simulator",
        path: "/Programming",
        option: "Prog",
        fire_path: "Programming/Drone.png",
        git: "/Contact",
        website: "/Contact",
        specs: "Texture Mapping, City Saving, Drone Movement, 3rd to 1st person view",
        techStack: " OpenGL and C",
        time: "3 Months",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",

        // sidebar: () => <div>shoelaces!</div>,
        main: () => <Options/>
    },
    {   label: "Battle of the Bands 2018",
        path: "/Programming",
        option: "Prog",
        fire_path: "Programming/BOTB.png",
        git: "https://github.com/muztank10/Battle-of-the-Bands-2018",
        website: "http://stw.ryerson.ca/~music/",
        specs: "Home, About, Contact, Social Media, User input form for auditions and feedback, FAQ section, Sponsors, JQuery Countdown clock",
        techStack: " HTML, CSS, JQuery, JavaScript, Google Analytics, React Bootstrap ",
        time: "2 weeks",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {   label: "My Website",
        path: "/Programming",
        option: "Prog",
        fire_path: "Programming/Personal.png",
        git: "https://github.com/muztank10/Personal-Portfolio-V2",
        website: "#",
        specs: "Home, About, Contact, Photo Gallery, Project displays, Google Analytics",
        techStack: "React JS, Three.js, React-Bootstrap, Firebase Storage and hosting, Node.js, React-Router",
        time: "2 Months",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        // sidebar: () => <div>shoelaces!</div>,
        main: () => <Options/>
    },
    {   label: "Battle of the Bands 2018 (Marketing Lead)",
        path: "/Projects",
        option: "Proj",
        fire_path: "Projects/BOTB2018.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        webLink: "http://stw.ryerson.ca/~music/" ,
        Resp: "Lorem ipsum dolor sit amet" ,
        Accomp: "Lorem ipsum dolor sit amet",
        time: "8 months ",
        linkLabel: "Event Page",
        relLinks: "https://www.facebook.com/events/mattamy-athletic-centre/battle-of-the-bands-2018/390263968111324/",
        main: () => <Options/>
    },
    {   label: "Battle of the Bands 2019 (Event Organizer)",
        path: "/Projects",
        option: "Proj",
        fire_path: "Projects/BOTB2019.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        webLink: "http://stw.ryerson.ca/~music/" ,
        Resp: "Lorem ipsum dolor sit amet" ,
        Accomp: "Lorem ipsum dolor sit amet",
        time: "1 year ",
        linkLabel: "Article about Battle of the Bands",
        relLinks: "https://www.canculturemag.com/music-1/2019/4/2/tequila-nosedive-steals-the-show-at-ryersons-battle-of-the-bands",
        main: () => <Options/>
    },
    {   label: "Musicians@Ryerson Website (Manager)",
        path: "/Projects",
        option: "Proj",
        fire_path: "Projects/Music.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        webLink: "http://stw.ryerson.ca/~music/Main_Website/M@R_Home.html" ,
        Resp: "Lorem ipsum dolor sit amet" ,
        Accomp: "Lorem ipsum dolor sit amet",
        time: "2 months",
        linkLabel: "N/A",
        relLinks: "#",
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
                        <li className="list" >
                            <Link
                                key={index}
                                to={route.path}
                                className="list-anchor"
                                onClick={() => {
                                    this.props.action(route.fire_path);
                                    if(this.props.description){
                                        this.props.description(
                                            route.description,
                                            route.git,
                                            route.website,
                                            route.specs,
                                            route.techStack,
                                            route.time)
                                    }
                                    else if(this.props.project) {
                                        this.props.project(
                                            route.description,
                                            route.webLink,
                                            route.Resp,
                                            route.Accomp,
                                            route.time,
                                            route.linkLabel,
                                            route.relLinks)
                                    }
                                    this.props.hide()
                                }}
                            >{route.label} </Link>
                        </li>
                        ))}
                        </div>
                        <div className="spacer"/>1
                        <div className="Info-wrapper">
                            <li className="Lower-list">
                                <Link to="/Pricing" className="list-anchor">Pricing</Link>
                            </li>
                            <li className="Lower-list">
                                <Link to="/About" className="list-anchor">About Me</Link>
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
