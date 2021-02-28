import React, { Component } from "react";
import { CardElement, ElementsConsumer } from "@stripe/react-stripe-js";
import axios from "axios";
import api from "../apis/api";

const configCard = {
  iconStyle: "solid",
  style: {
    base: {
      fontSize: "16px",
    },
  },
  hidePostalCode: true,
};

class PaymentDetailsForm extends Component {
  state = {
    shippingAddress: [],
    billingDetails: [],
    recipientName: "",
    nameOnCard: "",
  };

  handleFormSubmit = async (e) => {
    e.preventDefault();
    const { stripe, elements } = this.props;
    if (!stripe || !elements) {
      return;
    }

    const CardElement = elements.getElement("card");
    console.log(CardElement);
    axios
      .post("/api/stripe/payments", {
        amount: 1099 * 100,
        // shipping: {
        //   name: this.state.recipientName,
        //   address: { ...this.state.shippingAddress },
        // },
      })
      .then(({ data: clientSecret }) => {
        stripe
          .createPaymentMethod({
            type: "card",
            card: CardElement,
          })
          .then(({ paymentMethod }) => {
            console.log("paymentMethod", paymentMethod);
            stripe
              .confirmCardPayment(clientSecret, {
                payment_method: paymentMethod.id,
              })
              .then(({ paymentIntent }) => {
                console.log(paymentIntent);
              });
          });
      });
  };

  handleChange = async (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    // console.log(this.state);
  };

  handleShipping = async (e) => {
    const { name, value } = e.target;
    this.setState({
      shippingAddress: {
        ...this.state.shippingAddress,
        [name]: value,
      },
    });
    // console.log(this.state);
  };

  //   handleBilling = async (e) => {
  //     const { name, value } = e.target;
  //     this.setState({
  //       billingDetails: {
  //         ...this.state.billingDetails,
  //         [name]: value,
  //       },
  //     });
  //     console.log(this.state);
  //   };

  render() {
    console.log("[STRIPE]", this.props);
    return (
      <div>
        <form className="ui form" onSubmit={this.handleFormSubmit}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              value={this.state.recipientName}
              onChange={this.handleChange}
              name="recipientName"
              required
            />
          </div>
          <div className="field">
            <label>Address</label>
            <input
              type="text"
              placeholder="Line 1"
              value={this.state.shippingAddress.line1}
              name="line1"
              onChange={this.handleShipping}
              required
            />
          </div>
          <div className="field">
            <label>City</label>
            <input
              type="text"
              placeholder="City"
              value={this.state.shippingAddress.city}
              onChange={this.handleShipping}
              name="city"
              required
            />
          </div>{" "}
          <div className="field">
            <label>State</label>
            <input
              type="text"
              placeholder="State"
              value={this.state.shippingAddress.state}
              onChange={this.handleShipping}
              name="state"
              required
            />
          </div>{" "}
          <div className="field">
            <label>Postal Code</label>
            <input
              type="text"
              placeholder="Postal Code"
              value={this.state.shippingAddress.postalCode}
              onChange={this.handleShipping}
              name="postalCode"
              required
            />
          </div>{" "}
          <div className="field">
            <label>Country</label>
            <input
              type="text"
              placeholder="Country"
              value={this.state.shippingAddress.country}
              onChange={this.handleShipping}
              name="country"
              required
            />
          </div>
          <div className="field">
            <label>Name on Card</label>
            <input
              type="text"
              placeholder="Name on Card"
              value={this.state.nameOnCard}
              onChange={this.handleChange}
              name="nameOnCard"
              required
            />
          </div>
          <div className="field">
            <label>Card Details</label>

            <CardElement options={configCard} />
          </div>
          <button type="submit" className="ui fluid button">
            Pay Now
          </button>
        </form>
      </div>
    );
  }
}
function PaymentDetails() {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <PaymentDetailsForm stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  );
}
export default PaymentDetails;
