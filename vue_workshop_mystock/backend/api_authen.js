const express = require("express");
const router = express.Router();
const user = require("./models/user");
const bcrypt = require("bcryptjs");
const constants = require("./constant");

router.post("/login", (req, res) => {
  console.log("Login..." + JSON.stringify(req.body));
  res.json({ result: "Login", account: req.body });
});

router.post("/register", async (req, res) => {
  try {
    console.log("register..." + JSON.stringify(req.body));
    req.body.password = await bcrypt.hash(req.body.password, 8);
    const result = await user.create(req.body);
    res.json({ result: constants.kResultOk, message: JSON.stringify(result) });
  } catch (error) {
    res.json({ result: constants.kResultNok, message: JSON.stringify(error) });
  }
});

module.exports = router;
