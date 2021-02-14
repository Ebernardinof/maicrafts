import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="ui secondary  menu">
        <div className="item">
          <Link className="item" to="/">
            MaiCrafts
          </Link>
        </div>
        <div className="right menu">
          <div className="item">
            <Link className="ui item" to="/login">
              Login
            </Link>
            <Link className="ui item" to="/register">
              Sign Up
            </Link>
            {/* //create link to cart */}
            <Link className="ui item" to="/">
              <i className="shopping cart icon"></i>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default NavBar;
