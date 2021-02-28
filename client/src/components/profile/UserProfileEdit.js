import React, { Component } from "react";
import { fetchUserProfile, editUserProfile } from "../../actions/userActions";
import { connect } from "react-redux";

import axios from "axios";
import Loader from "../Loader";
import createBrowserHistory from "../../history";

class UserProfileEdit extends Component {
  state = {
    profile: null,
    firstName: "",
    lastName: "",
    email: "",
    billing: {
      country: String,
      street: String,
      city: String,
      stateProv: String,
      postalCode: String,
      phone: String,
    },
    loading: null,
    message: null,
    _isMounted: false,
  };

  componentDidMount() {
    axios.get("/api/users/profile").then((res) => {
      console.log("SEARCH RES ", res);
      this.setState({
        profile: res.data,
        loading: false,
        _isMounted: true,
      });
    });
    // axios.patch("/api/users/profile").then((res) => console.log(res));
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      billing: {
        country: this.state.country,
        street: this.state.street,
        city: this.state.city,
        stateProv: this.state.stateProv,
        postalCode: this.state.postalCode,
        phone: this.state.phone,
      },
      password: this.state.password,
    };
    this.props.editUserProfile(userData);
    createBrowserHistory.push("/dashboard");
  };

  componentWillUnmount() {
    this.setState({ _isMounted: false });
  }

  render() {
    console.log("PROFILE", this.state);
    if (this.state.loading) {
      return (
        <div>
          <Loader timeout="500" />
        </div>
      );
    } else {
      return (
        <div className="ui container">
          <h3>Profile</h3>
          <form className="ui form" onSubmit={this.onSubmit}>
            <div className="field">
              <label>First Name:</label>
              <input
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.onChange}
              />
            </div>
            <div className="field">
              <label>Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.onChange}
              />
            </div>
            <div className="field">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
              />
            </div>
            <div className="field">
              <label>Country:</label>
              <input
                type="text"
                name="country"
                value={this.state.country}
                onChange={this.onChange}
              />
              <div className="field">
                <label>Street:</label>
                <input
                  type="text"
                  name="street"
                  value={this.state.street}
                  onChange={this.onChange}
                />
              </div>{" "}
              <div className="field">
                <label>City:</label>
                <input
                  type="text"
                  name="city"
                  value={this.state.city}
                  onChange={this.onChange}
                />
              </div>{" "}
              <div className="field">
                <label>State:</label>
                <input
                  type="text"
                  name="stateProv"
                  value={this.state.stateProv}
                  onChange={this.onChange}
                />
              </div>{" "}
              <div className="field">
                <label>Postal Code:</label>
                <input
                  type="text"
                  name="postalCode"
                  value={this.state.postalCode}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="field">
              <label>Phone Number:</label>
              <input
                type="text"
                name="phone"
                value={this.state.phone}
                onChange={this.onChange}
              />
            </div>
            <button
              type="submit"
              className="ui fluid button btn-wrapper"
              style={{
                backgroundColor: "#1b998a",
                width: "20%",
                margin: "auto",
              }}
            >
              Submit
            </button>
          </form>
          {console.log(this.props)}
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => ({
  message: state.auth.message,
});

export default connect(mapStateToProps, { fetchUserProfile, editUserProfile })(
  UserProfileEdit
);
