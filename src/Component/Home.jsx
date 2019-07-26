import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './Home.css';
import Continue from './Continue.jsx';
import Options from './Options.jsx'
import {BrowserRouter as Router, Link} from "react-router-dom";
import {Route, Switch} from "react-router";
import Routes from "./Routes";
import Header from "./Header";

class Home extends Component {

/*    constructor(props) {
        super(props);

        this.state = {
            cont : false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({cont: true});
    }*/

    render() {

/*        const cont = this.state.cont;*/

        return (
            <div className="Home">
                <Container>

                    {/*<Route path="/Options" component={()=>cont ? (<Options/>) : (<Continue choice={this.handleClick}/>)} />*/}
                    {/*{cont ? (<Options/>) : (<Continue choice={this.handleClick}/>)}*/}
                    <Routes/>

                </Container>
            </div>
        );
    }
}

export default Home;
