import React, { Component, lazy } from 'react';
import { Switch, Route } from "react-router";

import menuItems from '../../configs/menuItems'

import Header from '../../components/Header';

import Home from '../../pages/Home'
import ErrorPage from '../../pages/404'

class Layout extends Component {

    render() {
        return(
            <>
                <Header menuItems={menuItems}/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/create" component={ErrorPage}/>
                    <Route exact path="*" component={ErrorPage}/>
                </Switch>
            </>
        )
    }
};

export default Layout;
