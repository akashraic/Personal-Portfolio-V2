import React, {Component} from 'react';
import Home from './Component/Home.jsx'
import './App.css';
import Photo from './Component/Photography.jsx'

class App extends Component {
    render() {
        return (
            <div className="main">
                <Home/>
                {/*<Photo/>*/}
            </div>
        );
    }
}

export default App;
