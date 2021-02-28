import React, { Component } from "react";
import { fetchUserProfile } from "../../actions/userActions";
import { connect } from "react-redux";
import createBrowserHistory from "../../history";
import axios from "axios";

class UserProfile extends Component {
  state = {
    profile: "",
    loading: null,
    message: null,
  };
  componentDidMount() {
    axios.get("/api/users/profile").then((res) =>
      this.setState({
        profile: res.data,
        loading: false,
      })
    );
  }

  renderBilling(billing) {
    // console.log(billing);
    if (billing && billing.street) {
      <p>
        {" "}
        {billing.street ? billing.street + ", " : false}
        {billing.city ? billing.city + ", " : false}
        {billing.stateProv ? billing.stateProv + ", " : false}
        {billing.postalCode ? billing.postalCode + ", " : false}
        {billing.country ? billing.country : false}
      </p>;
    }
  }
  render() {
    if (this.state.loading) {
      return (
        <div className="ui active dimmer">
          <div className="ui active centered inline loader"></div>
          <p>Loading...</p>
        </div>
      );
    }
    const { profile } = this.state;
    const { billing } = this.state.profile;
    // console.log("PROFILE", billing);
    return (
      <div className="ui container">
        <h2 className="ui header">Profile</h2>
        <div className="ui segments ">
          <div className="ui segment ">
            <h3 className="ui header">Personal Info</h3>
            <div className="ui segment ">
              Name: {profile.firstName} {profile.lastName}
            </div>
            <div className="ui segment ">Email: {profile.email}</div>
          </div>

          <div
            className="ui segment 
          "
          >
            {this.renderBilling(billing)}
            {billing && billing.phone && (
              <React.Fragment>
                <h3 className="ui header">Billing Info</h3>
                <div className="ui segment ">Street: {billing.street}</div>
                <div className="ui segment ">Country: {billing.country}</div>
                <div className="ui segment ">City: {billing.city}</div>
                <div className="ui segment ">State: {billing.stateProv}</div>
                <div className="ui segment ">City: {billing.city}</div>
                <div className="ui segment ">
                  Postal Code: {billing.postalCode}
                </div>
                <div className="ui segment ">Phone Number: {billing.phone}</div>
              </React.Fragment>
            )}
          </div>
        </div>
        <button
          className="ui fluid button btn-wrapper"
          style={{
            backgroundColor: "#1b998a",
            width: "20%",
            margin: "auto",
          }}
          onClick={() => createBrowserHistory.push("/profile/edit")}
        >
          Edit Profile
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ profile: state.auth.profile });

export default connect(mapStateToProps, { fetchUserProfile })(UserProfile);
