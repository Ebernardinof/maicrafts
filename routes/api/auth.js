const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

router.post(
  "/login",
  passport.authenticate("local-login", { failWithError: true }),
  async (req, res) => {
    res.send({
      auth: {
        userId: req.user.id,
        message: "success",
        rights: req.user.rights,
      },
    });
  },
  function (err, req, res, next) {
    if (req.autherror) {
      res.status(401).send({ message: req.autherror });
    }
  }
);

router.post(
  "/register",
  passport.authenticate("local-register", { failWithError: true }),
  async (req, res) => {
    return res.status(200).send({
      userId: req.user.id,
      message: "success",
      rights: req.user.rights,
    });
  },
  function (err, req, res, next) {
    if (req.autherror) {
      res.status(401).send({ message: req.autherror });
    }
  }
);

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
