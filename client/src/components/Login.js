import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";

import FlashMessage from "../components/FlashMessage";
import createBrowserHistory from "../history";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  renderAuthError() {
    if (this.props.message) {
      return (
        <FlashMessage
          title={this.props.message.title}
          text={this.props.message.text}
        />
      );
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData);
    console.log(userData);
  };

  render() {
    console.log("LOGIN", this.props.message);
    return (
      <div className="ui container">
        <div className="ui segment">
          <form className="ui form error" onSubmit={this.onSubmit}>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                onChange={this.onChange}
                value={this.state.email}
                name="email"
                type="email"
              />
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <input
                onChange={this.onChange}
                value={this.state.password}
                name="password"
                type="password"
              />
            </div>
            <div className="wrapper">
              <button
                type="submit"
                className="ui fluid button btn-wrapper"
                style={{
                  backgroundColor: "#1b998a",
                  width: "20%",
                  margin: "auto",
                }}
              >
                Login
              </button>
            </div>
            {this.props.message && (
              <FlashMessage
                title={this.props.message.title}
                text={this.props.message.text}
              />
            )}
          </form>
        </div>
        <div className="ui segment">
          <h3 className="ui centered header">
            Don't have an account? <Link to="/register">Register</Link>
          </h3>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  message: state.auth.message,
});

export default connect(mapStateToProps, { loginUser })(Login);
