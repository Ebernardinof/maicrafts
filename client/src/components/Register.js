import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
// import { connect } from "react-redux";
// import { registerUser } from "../actions/authActions";
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    // if (this.props.auth.isAuthenticated) {
    //   this.props.history.push("/dashboard");
    // }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="ui container">
        <div className="ui segment">
          <div className="col s8 offset-s2">
            <form noValidate className="ui form" onSubmit={this.onSubmit}>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.name,
                  })}
                />
                <span className="field error">{errors.name}</span>
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email,
                  })}
                />
                <span className="field error">{errors.email}</span>
              </div>
              <div className="field">
                <label htmlFor="password">Password</label>
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password,
                  })}
                />
                <span className="field error">{errors.password}</span>
              </div>
              <div className="field">
                <label htmlFor="password2">Confirm Password</label>
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2,
                  })}
                />
                <span className="field error">{errors.password2}</span>
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
                  Sign Up
                </button>
              </div>
            </form>
          </div>
          <div className="ui segment">
            <h3 className="ui centered header">
              Already have an account? <Link to="/login">Log in</Link>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default Register;
