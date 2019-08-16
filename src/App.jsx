import React, {Component} from 'react';
import Home from './Component/Home.jsx'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import {faFilePdf} from "@fortawesome/free-solid-svg-icons/faFilePdf";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faGithubSquare} from "@fortawesome/free-brands-svg-icons/faGithubSquare";

library.add(fab, faGithubSquare, faLinkedin, faFilePdf, faInstagram);

class App extends Component {
    render() {
        return (
            <div className="main" style={{height: '100%'}}>
                <Home/>

                {/*<Photo/>*/}
            </div>
        );
    }
}

export default App;
