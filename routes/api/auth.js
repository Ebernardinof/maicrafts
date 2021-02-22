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
    const { email, firstName, lastName, rights, tos } = req.body;

    return res.status(200).send({
      userId: req.user.id,
      message: "success",
    });
  },
  function (err, req, res, next) {
    if (req.autherror) {
      res.status(401).send({ message: req.autherror });
    }
  }
);

/* GET users listing. */
router.get("/current_user", function (req, res, next) {
  try {
    console.log(req.user);
    res.send(req.user);
  } catch (err) {
    res.send(401).send({ message: "User not logged" });
  }
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
