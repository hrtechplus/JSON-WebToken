const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const user = req.user;
  res.json(user);
  // res.json([
  //   { id: 1, name: "John Doe" },
  //   { id: 2, name: "Jane Doe" },
  //   { id: 3, name: "John Smith" },
  // ]);
});

module.exports = router;
