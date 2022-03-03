const express = require("express");
const { Sequelize } = require("sequelize");
const router = express.Router();
const product = require("./models/product");
const formidable = require("formidable");
const fs = require("fs-extra");

router.get("/product", async (req, res) => {
  const result = await product.findAll({ order: Sequelize.literal("id DESC") });
  res.json(result);
});

router.post("/product", (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, (error, fields, files) => {
    res.json({ error, fields, files});
  });
  // res.json({result:"OK",detail: req.body})
});
module.exports = router;
