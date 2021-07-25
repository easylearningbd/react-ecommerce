import React, { Component, Fragment } from 'react'
import { Router, Route, Switch } from "react-router";
import HomePage from '../pages/HomePage';
import UserLoginPage from '../pages/UserLoginPage';

class AppRoute extends Component {
     render() {
          return (
     <Fragment>
          <Switch>
               <Route exact path="/" component={HomePage} />
               <Route exact path="/login" component={UserLoginPage} />
          </Switch>

     </Fragment>
          )
     }
}

export default AppRoute
