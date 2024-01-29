const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/login", (req, res) => {
  // dan mrhtna ape username ekai password ekai ewanwa
  // eka check karnwa database eke
  // ok nam

  const username = req.body.username;
  // payload
  const user = { name: username };

  const token = jwt.sign(user, "hello my name is token");
  res.send({ token });
});

module.exports = router;
