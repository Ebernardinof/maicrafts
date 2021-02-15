import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";

import { connect } from "react-redux";

import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import Register from "./components/Register";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import ProductsShow from "./components/products/ProductsShow";

import createBrowserHistory from "./history";

import "./App.css";
import Footer from "./components/Footer";

class App extends Component {
  // componentDidMount() {
  //   this.props.setCurrentUser();
  // }
  render() {
    console.log(this.props);
    return (
      <Router history={createBrowserHistory}>
        {/* <div className="container"> */}
        <NavBar auth={this.props.auth} />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/products" component={ProductsShow} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
        {/* </div> */}
        <Footer />
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    // cart: state.cart,
  };
};

export default connect(mapStateToProps)(App);
