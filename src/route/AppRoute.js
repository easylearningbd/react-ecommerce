import React, { Component, Fragment } from 'react'
import { Router, Route, Switch } from "react-router";
import AboutPage from '../pages/AboutPage';
import CartPage from '../pages/CartPage';
import ContactPage from '../pages/ContactPage';
import FavouritePage from '../pages/FavouritePage';
import ForgetPasswordPage from '../pages/ForgetPasswordPage';
import HomePage from '../pages/HomePage';
import NotificationPage from '../pages/NotificationPage';
import PrivacyPage from '../pages/PrivacyPage';
import ProductCategoryPage from '../pages/ProductCategoryPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import ProductSubCategoryPage from '../pages/ProductSubCategoryPage';
import ProfilePage from '../pages/ProfilePage';
import PurchasePage from '../pages/PurchasePage';
import RefundPage from '../pages/RefundPage';
import RegisterPage from '../pages/RegisterPage';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import SearchPage from '../pages/SearchPage';
import UserLoginPage from '../pages/UserLoginPage';

class AppRoute extends Component {
     render() {
          return (
     <Fragment>
          <Switch>
               

 <Route exact path="/" render={(props) => <HomePage {...props} key={Date.now()} /> } />

 <Route exact path="/login" render={(props) => <UserLoginPage {...props} key={Date.now()} /> } />

  <Route exact path="/register" render={(props) => <RegisterPage {...props} key={Date.now()} /> } />

  <Route exact path="/forget" render={(props) => <ForgetPasswordPage {...props} key={Date.now()} /> } />
 
  <Route exact path="/reset/:id" render={(props) => <ResetPasswordPage {...props} key={Date.now()} /> } />

  <Route exact path="/profile" render={(props) => <ProfilePage {...props} key={Date.now()} /> } />

  

 
 <Route exact path="/contact" render={(props) => <ContactPage {...props} key={Date.now()} /> } />

 <Route exact path="/purchase" render={(props) => <PurchasePage {...props} key={Date.now()} /> } />

 <Route exact path="/privacy" render={(props) => <PrivacyPage {...props} key={Date.now()} /> } /> 

 <Route exact path="/refund" render={(props) => <RefundPage {...props} key={Date.now()} /> } />

 <Route exact path="/about" render={(props) => <AboutPage {...props} key={Date.now()} /> } />

 <Route exact path="/productdetails/:code" render={(props) => <ProductDetailsPage {...props} key={Date.now()} /> } />

 <Route exact path="/notification" render={(props) => <NotificationPage {...props} key={Date.now()} /> } />

 <Route exact path="/favourite" render={(props) => <FavouritePage {...props} key={Date.now()} /> } />

 <Route exact path="/cart" render={(props) => <CartPage {...props} key={Date.now()} /> } />

 <Route exact path="/productcategory/:category" render={(props) => <ProductCategoryPage {...props} key={Date.now()} /> } />

 <Route exact path="/productsubcategory/:category/:subcategory" render={(props) => <ProductSubCategoryPage {...props} key={Date.now()} /> } /> 

 <Route exact path="/productbysearch/:searchkey" render={(props) => <SearchPage {...props} key={Date.now()} /> } /> 
                  

          </Switch>

     </Fragment>
          )
     }
}

export default AppRoute
