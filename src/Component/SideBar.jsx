import React, {Component} from 'react';
import {Container, Row,Col} from 'react-bootstrap';
import SideNav, {NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import {Router, Route} from "react-router";

class Sidebar extends Component {
    render() {
        return (
            <div className="Sidebar-wrap">
                            <SideNav
                                onSelect={(selected) => {
                                    // Add your code here
                                }}
                            >
                                <SideNav.Toggle />
                                <SideNav.Nav defaultSelected="home">
                                    <NavItem eventKey="home">
                                        <NavIcon>
                                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                                        </NavIcon>
                                        <NavText>
                                            Home
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="charts">
                                        <NavIcon>
                                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                                        </NavIcon>
                                        <NavText>
                                            Charts
                                        </NavText>
                                        <NavItem eventKey="charts/linechart">
                                            <NavText>
                                                Line Chart
                                            </NavText>
                                        </NavItem>
                                        <NavItem eventKey="charts/barchart">
                                            <NavText>
                                                Bar Chart
                                            </NavText>
                                        </NavItem>
                                    </NavItem>
                                </SideNav.Nav>
                            </SideNav>
            </div>
        );
    }
}

export default Sidebar;
