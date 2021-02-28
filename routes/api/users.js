const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../../models/User");

/* GET users listing. */
router.get("/current_user", function (req, res, next) {
  try {
    console.log(req.user);
    res.send(req.user);
  } catch (err) {
    res.send(401).send({ message: "User not logged" });
  }
});
/* GET user profile. */
router.get("/profile", async (req, res, next) => {
  try {
    res.send(req.user);
  } catch (error) {
    res.status(401).send({ message: error });
  }
});

router.patch("/profile", async (req, res, next) => {
  const { oldPassword, newPassword, confirmPassword, local } = req.body;
  console.log(req.body);
  const user = await User.findOne({ _id: req.user.id });
  console.log("USER", user);
  let doc = await User.findOneAndUpdate({ _id: req.user.id }, req.body, {
    new: true,
  });
  try {
    res.send(doc);
  } catch (error) {
    res.status(401).send({ message: error });
  }
});

module.exports = router;
