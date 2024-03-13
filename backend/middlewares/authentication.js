const { verifyToken } = require("../services/auth");

const authentication = async (req, res, next) => {
  const bearerToken = req.headers["authorization"];
  try {
    if (!bearerToken) return res.status(400).json({ message: "Unathorized" });
    const token = bearerToken.split(" ")[1];
    const user = verifyToken(token);
    req.user = user;
    next();
  } catch (e) {
    next(e);
  }
};

module.exports = { authentication };
