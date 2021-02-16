const express = require("express");
const router = express.Router();

//Item model
const Product = require("../../models/Product");
const { route } = require("./auth");

router.get("/", (req, res) => {
  Product.find()
    .sort({ date: -1 })
    .then((products) => res.json(products));
});

router.post("/", (req, res) => {
  const newProduct = new Product({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    picUrl: req.body.picUrl,
  });
  newProduct.save().then((product) => res.json(product));
});

router.delete("/:id", (req, res) => {
  Product.findById(req.params.id)
    .then((product) => product.remove().then(() => res.json({ sucess: true })))
    .catch((err) => res.status(404).json({ sucess: false }));
});

module.exports = router;
