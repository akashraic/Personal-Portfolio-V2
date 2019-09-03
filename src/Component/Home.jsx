/*Calls routes which renders the route that is called by link*/

import React, {Component} from 'react';
import Routes from "./Routes";

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Routes/>
            </div>
        );
    }
}

export default Home;
