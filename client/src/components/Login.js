import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import classnames from "classnames";

import createBrowserHistory from "../history";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
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
    const { errors } = this.state;
    console.log("LOGIN", this.props.auth);
    return (
      <div className="ui container">
        <div className="ui segment">
          <form noValidate className="ui form" onSubmit={this.onSubmit}>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                onChange={this.onChange}
                value={this.state.email}
                error={errors.email}
                className={classnames("", {
                  invalid: errors.email || errors.emailnotfound,
                })}
                id="email"
                type="email"
              />
              <span className="field error">
                {errors.email}
                {errors.emailnotfound}
              </span>
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <input
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                className={classnames("", {
                  invalid: errors.password || errors.passwordincorrect,
                })}
                id="password"
                type="password"
              />
              <span className="field error">
                {errors.password}
                {errors.passwordincorrect}
              </span>
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
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
