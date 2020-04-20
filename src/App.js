import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
//Lazy loading
import asyncComponent from './hoc/asyncComponent/asyncComponent';

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Logout from "./containers/Authenticate/Logout/Logout";
import * as actions from "./store/actions/index";

const asyncCheckout = asyncComponent(()=>{
  return import('./containers/Checkout/Checkout');
});
const asyncOrders = asyncComponent(()=>{
  return import('./containers/Orders/Orders');
});
const asyncAuthenticate = asyncComponent(()=>{
  return import('./containers/Authenticate/Authenticate');
});

class App extends Component {
  componentDidMount() {
    this.props.onCheckAuthToken();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/authenticate" component={asyncAuthenticate} />
        <Route path="/" exact component={BurgerBuilder} />
        {/*Redirect if unknown/protected routes*/}
        <Redirect to='/'/>
      </Switch>
    );
    
    //Do this to protect the routes that require authentication
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/checkout" component={asyncCheckout} />
          <Route path="/orders" component={asyncOrders} />
          <Route path="/logout" component={Logout} />
          <Route path="/authenticate" component={asyncAuthenticate} />
          <Route path="/" exact component={BurgerBuilder} />
          {/*Redirect if unknown/protected routes*/}
          <Redirect to='/'/>
        </Switch>
      );
    }

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authenticate.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckAuthToken: () => dispatch(actions.checkAuthTokenAvailable()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
