import React, { Component, lazy } from 'react';
import { Switch, Route } from "react-router";

import ErrorPage from '../../pages/404'

class Layout extends Component {

    render() {
        return(
            <>
                <Switch>
                    <Route exact path="/" component={ErrorPage}/>
                    <Route exact path="/create" component={ErrorPage}/>
                    <Route exact path="/detail" component={ErrorPage}/>
                    <Route exact path="*" component={ErrorPage}/>
                </Switch>
            </>
        )
    }
};

export default Layout;
