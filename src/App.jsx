import React, {Component} from 'react';
import Home from './Component/Home.jsx'
import './App.css';
import Photo from './Component/Photography.jsx'
import Routes from "./Component/Routes";

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
