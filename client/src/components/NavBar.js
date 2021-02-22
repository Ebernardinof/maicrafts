import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  renderAuthenticatedNav() {
    if (this.props.auth && this.props.auth.isSignedIn) {
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
    if (this.props.auth === false || this.props.auth.isSignedIn === false) {
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
    } else if (this.props.auth.isSignedIn === true) {
      console.log("loggedin ");
      return (
        <a
          key="1"
          style={{
            backgroundColor: "#1b998a",
          }}
          href="/api/auth/logout"
          className="ui fluid button btn-wrapper"
          onClick={(e) => {
            window.localStorage.removeItem("state");
          }}
        >
          Logout
        </a>
      );
    } else {
      console.log("nothing");

      return;
    }
  }

  render() {
    console.log(this.props);
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
            <Link className="ui item" to="/">
              <i className="shopping cart icon"></i>
            </Link>

            {this.renderLoginButtons()}

            {/* //create link to cart */}
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
