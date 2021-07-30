import React, { Component, Fragment } from 'react'
import { Router, Route, Switch } from "react-router";
import AboutPage from '../pages/AboutPage';
import CartPage from '../pages/CartPage';
import ContactPage from '../pages/ContactPage';
import FavouritePage from '../pages/FavouritePage';
import HomePage from '../pages/HomePage';
import NotificationPage from '../pages/NotificationPage';
import PrivacyPage from '../pages/PrivacyPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import PurchasePage from '../pages/PurchasePage';
import RefundPage from '../pages/RefundPage';
import UserLoginPage from '../pages/UserLoginPage';

class AppRoute extends Component {
     render() {
          return (
     <Fragment>
          <Switch>
               <Route exact path="/" component={HomePage} />
               <Route exact path="/login" component={UserLoginPage} />
               <Route exact path="/contact" component={ContactPage} />

               <Route exact path="/purchase" component={PurchasePage} />
               <Route exact path="/privacy" component={PrivacyPage} />
               <Route exact path="/refund" component={RefundPage} />
               <Route exact path="/about" component={AboutPage} />

               <Route exact path="/productdetails" component={ProductDetailsPage} />

               <Route exact path="/notification" component={NotificationPage} />
               <Route exact path="/favourite" component={FavouritePage} />
               <Route exact path="/cart" component={CartPage} />
          </Switch>

     </Fragment>
          )
     }
}

export default AppRoute
