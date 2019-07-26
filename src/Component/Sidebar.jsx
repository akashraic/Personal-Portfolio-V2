import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
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
        path: "/",
        exact: true,
        // sidebar: () => ,
        main: () => <Home/>
    },
    {
        path: "/Photography",
        // sidebar: () => <div>bubblegum!</div>,
        main: () => <Photography/>
    },
    {
        path: "/Options",
        // sidebar: () => <div>shoelaces!</div>,
        main: () => <Options/>
    }
];

function Sidebar() {
    return (
            <div className="Sidebar-wrap">
                <div className="Sidebar">
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Photography">Bubblegum</Link>
                        </li>
                        <li>
                            <Link to="/Options">Shoelaces</Link>
                        </li>
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

                <div style={{ flex: 1, padding: "10px" }}>
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
                </div>
            </div>
    );
}

export default Sidebar;
