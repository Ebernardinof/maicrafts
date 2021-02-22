const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

/* GET user profile. */
router.get("/profile", function (req, res, next) {
  res.send(req.user);
});

module.exports = router;
