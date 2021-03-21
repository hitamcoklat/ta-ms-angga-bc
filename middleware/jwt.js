let jwt = require("jsonwebtoken");

let checkToken = (req, res, next) => {
//   let token = req.headers["authorization"];
  let token = req.headers["x-access-token"] || req.headers["authorization"];
  
  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  if (token.startsWith("Bearer ")) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }

  if (token) {
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        return res.json({
          message: "Token is not valid",
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.json({
      message: "Auth token is not supplied",
    });
  }
};

module.exports = {
  checkToken: checkToken,
};
