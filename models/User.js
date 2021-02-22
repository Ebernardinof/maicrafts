const mongoose = require("mongoose");
const { Schema } = mongoose;
// Create Schema
const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  picUrl: String,
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("User", userSchema);
mongoose.model("users", userSchema);
