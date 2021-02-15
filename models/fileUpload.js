const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//set the collection schema
const uploadSchema = new Schema({
  picUrl: String,
});
//it is the collection name in which our userSchema data will be stored
// var fileUpload = mongoose.model("pics", uploadSchema);
module.exports = fileUpload = mongoose.model("pics", uploadSchema);
