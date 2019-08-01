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
        path: "/",
        exact: true,
        // sidebar: () => ,
        main: () => <Home/>
    },
    {
        label: "Concert",
        path: "/Photography",
        // sidebar: () => <div>bubblegum!</div>,
        main: () => <Photography/>
    },
    {
        label: "Events",
        path: "/Options",
        // sidebar: () => <div>shoelaces!</div>,
        main: () => <Options/>
    },
    {
        label: "Headshots",
        path: "/Options",
        // sidebar: () => <div>shoelaces!</div>,
        main: () => <Options/>
    },
    {
        label: "Landscape",
        path: "/Options",
        // sidebar: () => <div>shoelaces!</div>,
        main: () => <Options/>
    },
    {
        label: "Portraits",
        path: "/Options",
        // sidebar: () => <div>shoelaces!</div>,
        main: () => <Options/>
    },
    {   label: "Street",
        path: "/Options",
        // sidebar: () => <div>shoelaces!</div>,
        main: () => <Options/>
    }
];


class Sidebar extends Component {

        constructor(props) {
            super(props);

            this.state = {
                option: " ",
                choice: " "
            };

            console.log(this.props);
        }

    render() {
        return (
            <div className="Sidebar-wrap">
                <div className="Sidebar">
                    <ul className="nav-list">
{/*                        <li className="list">
                            <Link to="/" className="list-anchor">Home</Link>
                        </li>
                        <li className="list">
                            <Link to="/Photography" className="list-anchor">Bubblegum</Link>
                        </li>
                        <li className="list">
                            <Link to="/Options" className="list-anchor">Shoelaces</Link>
                        </li>*/}
                        {routes.map((route, index) => (
                        <li className="list">
                            <Link key={index} to={route.path} className="list-anchor">{route.label}</Link>
                        </li>
                        ))}
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
                </div>

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
