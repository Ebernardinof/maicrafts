import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    console.log("footer");
    return (
      <div className="ui  vertical footer" style={{ paddingTop: "50px" }}>
        <div className="ui container">
          <div className="ui stackable  equal height stackable grid">
            <div className="three wide column">
              <h4 className="ui  header">About</h4>
              <div className="ui link list">
                <Link to="/" className="item">
                  Sitemap
                </Link>{" "}
                <Link to="/" className="item">
                  Sitemap
                </Link>{" "}
                <Link to="/" className="item">
                  Sitemap
                </Link>
              </div>
            </div>
            <div className="three wide column">
              <h4 className="ui  header">Banana-Order</h4>
              <div className="ui link list">
                <Link to="/" className="item">
                  Banana-Order
                </Link>{" "}
                <Link to="/" className="item">
                  Banana-Order
                </Link>{" "}
                <Link to="/" className="item">
                  Banana-Order
                </Link>
              </div>
            </div>
            <div className="seven wide column">
              <h4 className="ui  header">Extra Space</h4>
              <div className="ui link list">
                <Link to="/" className="item">
                  Extra Space
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
