const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");
const stripe = require("stripe")(keys.privateStripeKey);

/* GET user profile. */
router.post("/payments", async (req, res) => {
  try {
    console.log("STRIP ROUTE BODY", req.body);
    console.log("STRIP ROUTE RESPONSE", res.body);
    const { amount, shipping } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      shipping,
      currency: "eur",
    });
    res.status(200).send(paymentIntent.client_secret);
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: error.message });
  }
});

module.exports = router;
