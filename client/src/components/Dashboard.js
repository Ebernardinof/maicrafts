import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ProductsAdd from "../components/products/ProductsAdd";

class Dashboard extends Component {
  render() {
    const { user } = this.props.auth;
    return (
      <div className="container ">
        <div className="ui raised very padded text container segment">
          <div className="centered">
            <h3 className="ui header centered">
              <b>Hey there, </b>
              <br />
              {/* {user.name.split(" ")[0]} */}
              <p>Welcome to MaiCrafts !👏</p>
            </h3>

            <ProductsAdd />
            <div>
              <Link
                className="ui fluid button btn-wrapper"
                style={{
                  backgroundColor: "#1b998a",
                  width: "20%",
                  margin: "auto",
                }}
                to="/products"
              >
                My products
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
