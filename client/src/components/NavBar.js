import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/authActions";
import { connect } from "react-redux";
import createBrowserHistory from "../history";

class NavBar extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
    createBrowserHistory.push("/");
    // window.localStorage.removeItem("state");
  };

  renderAuthenticatedNav() {
    if (this.props.auth && this.props.auth.isAuthenticated) {
      return (
        <React.Fragment>
          <Link to="/dashboard" className="item">
            MyDashboard
          </Link>
          <Link to="/purchases" className="item">
            Purchases
          </Link>
          <Link to="/profile" className="item">
            Profile
          </Link>
        </React.Fragment>
      );
    }
    // if (this.props.auth.isAdmin) {
    //   return (
    //     <React.Fragment>
    //       <Link to="/admin/dashboard" className="item">
    //         Admin Dashboard
    //       </Link>
    //       <Link to="/purchases" className="item">
    //         Client Purchases
    //       </Link>
    //       <Link to="/profile" className="item">
    //         Client Profiles
    //       </Link>
    //     </React.Fragment>
    //   );
    // }
    else {
      return (
        <React.Fragment>
          <Link to="/products" className="item">
            Products
          </Link>
        </React.Fragment>
      );
    }
  }

  renderLoginButtons() {
    if (
      this.props.auth === false ||
      this.props.auth.isAuthenticated === false
    ) {
      return (
        <React.Fragment>
          <Link key="2" to="/login" className="item">
            Login
          </Link>
          <Link key="3" to="/register" className="item">
            Sign Up
          </Link>
        </React.Fragment>
      );
    } else if (this.props.auth.isAuthenticated === true) {
      console.log("loggedin ");
      return (
        <button
          style={{
            backgroundColor: "#1b998a",
          }}
          onClick={this.onLogoutClick}
          className="ui fluid button btn-wrapper"
        >
          Logout
        </button>
      );
    } else {
      console.log("nothing");

      return;
    }
  }

  render() {
    console.log(this.props.auth);
    return (
      <div className="ui secondary menu">
        <div className="item ">
          <Link
            className="item "
            style={{ color: "#1b998a", fontSize: "24px" }}
            to="/"
          >
            {" "}
            <img
              className="ui avatar circular image"
              src="https://res.cloudinary.com/dc7mdaqqk/image/upload/v1613332371/cfr7def1r4cobrovfh92.jpg"
              alt="logo"
            />
            MaiCrafts
          </Link>
        </div>
        <div className="right menu">
          <div className="item">
            {this.renderAuthenticatedNav()}

            {/* {this.renderCartButton()} */}

            {this.renderLoginButtons()}
            {/* <Link className="ui item" to="/login">
              Login
            </Link>
            <Link className="ui item" to="/register">
              Sign Up
            </Link> */}
            {/* //create link to cart */}
            {/* <Link className="ui item" to="/">
              <i className="shopping cart icon"></i>
            </Link> */}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(NavBar);
