import React, { Component, lazy } from 'react';
import { Switch, Route } from "react-router";

import Home from '../../pages/Home'
import ErrorPage from '../../pages/404'

class Layout extends Component {

    render() {
        return(
            <>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="*" component={ErrorPage}/>
                </Switch>
            </>
        )
    }
};

export default Layout;
