const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function (req, res, next) {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).send("Access Denied");
    }

    jwt.verify(token, process.env.EN_KEY, (err, user) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return res.status(401).send("Token Expired");
        } else {
          return res.status(403).send("Invalid Token");
        }
      }

      req.user = user;
      next();
    });
  } else {
    res.status(401).send("Access Denied");
  }
};
