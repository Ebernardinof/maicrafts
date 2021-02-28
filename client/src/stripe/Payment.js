import React, { Component } from "react";
import PaymentDetails from "./PaymentDetails";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_yZQN8HuC0FJeEVgbAWMROOZ800UCYoOQiB");

export default class Payment extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="ui container">
        <h3>Shipping Details</h3>
        <Elements stripe={stripePromise}>
          <PaymentDetails />
        </Elements>
      </div>
    );
  }
}
