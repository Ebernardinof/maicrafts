import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import FlashMessage from "../components/FlashMessage";

class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
    errors: null,
    message: null,
  };

  renderError() {
    if (this.props.message) {
      return (
        <FlashMessage
          title={this.props.message.title}
          text={this.props.message.text}
        />
      );
    }
  }
  renderFormError() {
    if (this.state.errors) {
      return (
        <FlashMessage
          title={this.state.errors.title}
          text={this.state.errors.text}
        />
      );
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, password2 } = this.state;
    if (firstName === "" || lastName === "" || password !== password2) {
      this.setState({
        errors: {
          title: "Woops!",
          text: "Something's missing!",
          className: "red error",
        },
      });
    } else {
      const newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        password2: password2,
      };
      this.props.registerUser(newUser, this.props.history);
    }
  };

  render() {
    console.log("REGISTER", this.props.message);
    return (
      <div className="ui container">
        <div className="ui segment">
          <form className="ui form error" onSubmit={this.onSubmit}>
            <div className="field">
              <label htmlFor="name">First Name</label>
              <input
                onChange={this.onChange}
                value={this.state.firstName}
                name="firstName"
                type="text"
              />
            </div>
            {this.state.errors && (
              <FlashMessage
                title={this.state.errors.title}
                text={this.state.errors.text}
                className={this.state.errors.className}
                onClose={(e) => this.onClose}
              />
            )}
            <div className="field">
              <label htmlFor="name">Last Name</label>
              <input
                onChange={this.onChange}
                value={this.state.lastName}
                name="lastName"
                type="text"
              />
            </div>
            {this.state.errors && (
              <FlashMessage
                title={this.state.errors.title}
                text={this.state.errors.text}
                className={this.state.errors.className}
                onClose={(e) => this.onClose}
              />
            )}
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

            <div className="field">
              <label htmlFor="password2">Confirm Password</label>
              <input
                onChange={this.onChange}
                value={this.state.password2}
                name="password2"
                type="password"
              />
            </div>
            {this.state.errors && (
              <FlashMessage
                title={this.state.errors.title}
                text={this.state.errors.text}
                className={this.state.errors.className}
                onClose={(e) => this.onClose}
              />
            )}
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
            {this.props.message && (
              <FlashMessage
                title={this.props.message.title}
                text={this.props.message.text}
              />
            )}
          </form>
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
  // auth: state.auth,
  message: state.auth.message,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
