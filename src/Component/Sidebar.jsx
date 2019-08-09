import React, {Component} from 'react';
import {Link } from "react-router-dom";
import './Sidebar.css';
import Home from './Home.jsx';
import {Route} from "react-router";
import Photography from "./Photography";
import Options from "./Options";

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
        return (
                <div className="Sidebar">
                    {/*<div><Link to="/">Akash Rai</Link></div>*/}
                    <ul className="nav-list">
                        {/*<a href="javascript:void(0)" className="close" onClick={this.closeSM}></a>*/}
                        <div className="sm-wrapper">
                        {routes.filter(routes => routes.option === this.props.choice).map((route, index) => (
                        <li className="list">
                            <Link key={index} to={route.path} className="list-anchor" onClick={() => this.props.action(route.fire_path)}>{route.label} </Link>
                        </li>
                        ))}
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
