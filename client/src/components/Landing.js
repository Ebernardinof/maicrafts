import React, { Component } from "react";

import logo from "../maiCraftsLogo.jpg";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    console.log("landing", this.state);
    return (
      <div
        className="container"
        // style={{ backgroundColor: "#F592B8 " }}
      >
        <div className="ui three column grid" style={{ padding: "25px" }}>
          <div className="column">
            <div className="ui fluid card">
              <div className="image">
                <img src={logo} alt="logo" />
                <h2 className="ui header centered">Dogs Roles with Humans</h2>
                <span />
              </div>
            </div>
          </div>
          <div className="column">
            <div className="ui fluid card">
              <div className="image">
                <img src={logo} alt="logo" />
                <h2 className="ui header centered ">Dogs Roles with Humans</h2>
                <span />
              </div>
            </div>
          </div>
          <div className="column">
            <div className="ui fluid card">
              <div className="image">
                <img src={logo} alt="logo" />
                <h2 className="ui header centered">
                  Dogs Roles with Humans
                </h2>{" "}
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
