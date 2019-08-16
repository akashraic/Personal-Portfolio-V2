import React, {Component} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import './Main_content.css';
import Sidebar from "./Sidebar.jsx";
import Toolbar from "./SideDrawer/Toolbar";
import Backdrop from "./Backdrop/Backdrop";

class Programming extends Component {
    constructor(props) {
        super(props);

        this.state = {
            option: "Prog",
            sideDrawerOpen: false,
            fire_path: "",
        };
        this.childHandler = this.childHandler.bind(this);
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return{sideDrawerOpen: !prevState.sideDrawerOpen}
        });
    };

    childHandler(dataFromChild) {
        // log our state before and after we updated it
        this.state.bool = true;
        // console.log('%cPrevious Parent State: ' + JSON.stringify(this.state), "color:orange");
        this.setState({
            fire_path: dataFromChild,
        },() => console.log('Updated Parent State:', this.state));
    }

    render() {

        let backdrop;

        if(this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler}/>;
        }

        return (
            <div className="Programming-wrap">
                <Toolbar
                    drawerClick={this.drawerToggleClickHandler}
                    path={this.childHandler}/>
                <Container className="Programming">
                    <Row>
                        <Col className="Sidebar-area">
                            <Sidebar
                                choice={this.state.option}
                                action={this.childHandler}
                                show={this.state.sideDrawerOpen}
                                hide={this.drawerToggleClickHandler} />
                            {backdrop}
                        </Col>
                        <Col>
                            <h1 className="Title">Programming</h1>
                            <Image />
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Programming;
