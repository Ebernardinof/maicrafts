const express = require("express");
const multer = require("multer");
const keys = require("../../config/keys");
const router = express.Router();
const cloudinary = require("cloudinary");
const fileUpload = require("../../models/fileUpload");

var storage = multer.diskStorage({});
var upload = multer({ storage: storage });

// MULTER
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     console.log(file);
//     cb(null, file.originalname);
//   },
// });
cloudinary.config({
  cloud_name: keys.cloudinary_cloud_name,
  api_key: keys.cloudinary_api_key,
  api_secret: keys.cloudinary_api_secret,
});
// MULTER
router.post("/upload-image", upload.single("pic"), (req, res) => {
  console.log(req.file);

  //uploading the file to the cloudinary cloud
  //this will return us json data in which it will provide
  //the url of the image by which we can get it from cloud
  cloudinary.v2.uploader
    .upload(req.file.path)
    .then(function (data) {
      console.log(data);
      const temp = new fileUpload({
        picUrl: data.secure_url,
      });
      //saving the data
      temp.save((error, data) => {
        if (error) {
          console.log("error", error);
        } else {
          res.status(200).send(temp.picUrl);
          //   res.redirect("/");
        }
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.get("/getLatest", async (req, res) => {
  const getImage = await fileUpload.findOne().sort({ _id: -1 });
  res.json(getImage.picUrl);
  console.log("getImage.picUrl", getImage.picUrl);
});

module.exports = router;
