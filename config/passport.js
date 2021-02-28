const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const md5 = require("md5");
const bcrypt = require("bcrypt");

const User = mongoose.model("users");

const saltRounds = 10;

// function createRights(rights) {
//   if (rights.merchant) {
//     rights = { merchant: true, buyer: false };
//   } else {
//     rights = { merchant: false, buyer: true };
//   }
//   return rights;
// }

module.exports = (passport) => {
  passport.serializeUser(function (user, done) {
    console.log("serializeUser: " + user._id);
    done(null, user._id);
  });
  // used to deserialize the user
  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      // console.log("deserializerERROR", err, "USER", user);
      done(err, user);
    });
  });

  // Local Strategy
  passport.use(
    "local-register",
    new LocalStrategy(
      {
        // by default, local strategy uses username and password, we will override with email
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true, // allows us to pass back the entire request to the callback
      },
      function (req, email, password, done) {
        // asynchronous
        // User.findOne wont fire unless data is sent back
        console.log("passport req.body", req.body);
        User.findOne({ email: email }, (err, user) => {
          if (err) {
            return done(err);
          }

          // User not found
          if (user) {
            req.autherror = {
              title: "This email is already taken",
              text: "Login or choose a different email",
            };
            return done(null, false);
          } else {
            var newUser = new User();
            // set the user's local credentials
            newUser.email = email;
            newUser.firstName = req.body.firstName;
            newUser.lastName = req.body.lastName;
            newUser.rights.buyer = true;
            newUser.confirmHash = md5(email + Date.now().toString());
            newUser.createdAt = new Date();
            newUser.password = bcrypt.hashSync(password, saltRounds);
            // save the user
            newUser.save(function (err) {
              if (err) throw err;

              return done(null, newUser);
            });
          }
        });
      }
    )
  );
  passport.use(
    "local-login",
    new LocalStrategy(
      {
        // by default, local strategy uses username and password, we will override with email
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true, // allows us to pass back the entire request to the callback
      },

      function (req, email, password, done) {
        User.findOne({ email: email }, function (err, user) {
          // if there are any errors, return the error before anything else
          if (err) return done(err);
          // if no user is found, return the message
          if (!user) {
            req.autherror = {
              title: "Wrong email",
              text:
                "We can't find your email. You can try again or create an account",
            };
            return done(null, false); // req.flash is the way to set flashdata using connect-flash
          }
          // if the user is found but the password is wrong
          if (!bcrypt.compareSync(password, user.password)) {
            req.autherror = {
              title: "Wrong password, try again! ",
              text: "Wrong password, try again or Signup ",
            };

            return done(null, false); // create the loginMessage and save it to session as flashdata
          }
          // all is well, return successful user
          //will also attach a cookie to the request
          return done(null, user);
        });
      }
    )
  );
};
