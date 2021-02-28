const mongoose = require("mongoose");
const { Schema } = mongoose;
// Create Schema
const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  picUrl: String,
  createdAt: Date,
  rights: {
    buyer: Boolean,
    admin: Boolean,
  },
  billing: {
    country: String,
    street: String,
    city: String,
    stateProv: String,
    postalCode: String,
    phone: String,
  },
});
module.exports = mongoose.model("User", userSchema);

//one argument in mongoose means we try to fetch a model schema
//two arguments in mongoose means we are trying to load something into it
mongoose.model("users", userSchema);
