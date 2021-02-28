import React, { Component } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { connect } from "react-redux";
import { fetchUser } from "./actions/authActions";
// import { Provider } from "react-redux";
// import store from "./store";

import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import Register from "./components/Register";
import Login from "./components/Login";
import UserProfile from "./components/profile/UserProfile";
import UserProfileEdit from "./components/profile/UserProfileEdit";
import Payment from "./stripe/Payment";
import Dashboard from "./components/Dashboard";
import ProductsShow from "./components/products/ProductsShow";
import Footer from "./components/Footer";

import createBrowserHistory from "./history";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    console.log("[APP]", this.props);
    const AdminRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={(props) =>
          this.props.auth && this.props.auth.rights.admin ? (
            <Component {...props} />
          ) : this.props.auth === false ? (
            <Redirect to="/adminz/login" />
          ) : (
            false
          )
        }
      />
    );
    const LoggedRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={(props) =>
          this.props.auth.isSignedIn === true ? (
            <Component {...props} />
          ) : this.props.auth === false ? (
            <Redirect to="/login" />
          ) : (
            false
          )
        }
      />
    );
    console.log("FETCHUSER [APP]", this.props);
    return (
      <>
        {/* <Provider> */}

        <Router history={createBrowserHistory}>
          <Switch>
            <NavBar auth={this.props.auth} />
          </Switch>
          {/* <div className="container"> */}
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/products" component={ProductsShow} />
          {/* <Route exact path="/dashboard" component={Dashboard} /> */}
          <Route path="/dashboard" component={Dashboard} />
          <LoggedRoute path="/payment" component={Payment} />
          <LoggedRoute path="/profile" component={UserProfile} />
          <LoggedRoute path="/profile/edit" component={UserProfileEdit} />
          {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}

          {/* </div> */}
          <Footer />
        </Router>
        <div></div>
        {/* </Provider> */}
      </>
    );
  }
}
const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps, { fetchUser })(App);
