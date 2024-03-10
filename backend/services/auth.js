const jwt = require("jsonwebtoken");

const createToken = (payloads) => {
  return jwt.sign(payloads, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_VALIDITY,
  });
};

const verifyToken = (token) => {
  const user = jwt.verify(token, process.env.JWT_SECRET);
  return user;
};

module.exports = { createToken, verifyToken };
