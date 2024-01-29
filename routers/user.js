const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/login", (req, res) => {
  const username = req.body.username;
  const user = { name: username };
  const token = jwt.sign(user, "hello my name is token");
  res.send({ token });
});

module.exports = router;
