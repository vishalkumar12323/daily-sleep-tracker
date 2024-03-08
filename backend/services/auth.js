const jwt = require("jsonwebtoken");

const createToken = (payloads) => {
  return jwt.sign(payloads, process.env.JWT_SECRET);
};

const verifyToken = () => {};

module.exports = { createToken, verifyToken };
