import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (
      <div className="container">
        <div className="ui raised very padded text container segment">
          <div className="centered">
            <h3 className="ui header centered">
              <b>Hey there, </b>
              <br />
              {user.name.split(" ")[0]}
              <p>Welcome to MaiCrafts !👏</p>
            </h3>

            <button
              style={{
                backgroundColor: "#1b998a",
                width: "20%",
                margin: "auto",
              }}
              onClick={this.onLogoutClick}
              className="ui fluid button btn-wrapper"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
