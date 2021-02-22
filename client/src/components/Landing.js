import React, { Component } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";

class Landing extends Component {
  render() {
    console.log("landing state", this.props);
    return (
      <div>
        <div
          className="container dashboard"
          // style={{ backgroundColor: "#F592B8 " }}
        >
          <div className="ui four column grid">
            <div className="column">
              {/* <div className="ui fluid card"> */}
              {/* <div className="image"> */}
              <img
                className="ui medium circular image"
                src="https://res.cloudinary.com/dc7mdaqqk/image/upload/v1613405842/fkhfqltvprjp8lrxhnfc.jpg"
                alt="logo"
              />
              {/* <h2 className="ui header centered">Dogs Roles with Humans</h2>{" "} */}
              <span />
              {/* </div> */}
              {/* </div> */}
            </div>
            <div className="column">
              {/* <div className="ui fluid card"> */}
              {/* <div className="image"> */}
              <img
                className="ui medium circular image"
                src="https://res.cloudinary.com/dc7mdaqqk/image/upload/v1613404333/dnzylfuxmsirhlyze3rj.jpg"
                alt="logo"
              />
              <h3 className="ui header centered">Dogs Roles with Humans</h3>
              <span />
            </div>
            {/* </div> */}
            {/* </div> */}
            <div className="column">
              {/* <div className="ui fluid card"> */}
              {/* <div className="image"> */}
              <img
                className="ui medium circular image"
                src="https://res.cloudinary.com/dc7mdaqqk/image/upload/v1613404338/cjqghnx3rxniheken6bd.jpg"
                alt="logo"
              />
              <h3 className="ui header centered ">Dogs Roles with Humans</h3>
              <span />
            </div>
            {/* </div> */}
            {/* </div> */}
            <div className="column">
              {/* <div className="ui fluid card"> */}
              {/* <div className="image"> */}
              <img
                className="ui medium circular image"
                src="https://res.cloudinary.com/dc7mdaqqk/image/upload/v1613404277/ycem6e22mbjaikl4eg3u.jpg"
                alt="logo"
              />
              <h3 className="ui header centered">Dogs Roles with Humans</h3>{" "}
              <span />
              {/* </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
        {/* <Dashboard /> */}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(Landing);
