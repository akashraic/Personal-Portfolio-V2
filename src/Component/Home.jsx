import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import Routes from "./Routes";

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
                {/*<Container className="Home-container">*/}

                    {/*<Route path="/Options" component={()=>cont ? (<Options/>) : (<Continue choice={this.handleClick}/>)} />*/}
                    {/*{cont ? (<Options/>) : (<Continue choice={this.handleClick}/>)}*/}
                    <Routes/>

            </div>
        );
    }
}

export default Home;
