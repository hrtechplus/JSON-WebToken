const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function (req, res, next) {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    const token = req.headers.authorization.split(" ")[1];
    if (token === null) return res.status(401).send("Access Denied");
    jwt.verify(token, process.env.EN_KEY, (err, user) => {
      if (err) res.status(403).send("Invalid Token");
      req.user = user;
      next();
    });
  } else res.status(401).send("Access Denied");
};
