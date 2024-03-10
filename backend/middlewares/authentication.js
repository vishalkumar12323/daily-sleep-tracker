const { verifyToken } = require("../services/auth");

const authentication = async (req, res, next) => {
  const bearerToken = req.header("Authorization");
  try {
    if (!bearerToken)
      return res.status(400).json({ message: "authorization required." });
    const token = bearerToken.split(" ")[1];
    const user = verifyToken(token);
    req.user = user;
    next();
  } catch (e) {
    console.log(e);
    next(e);
  }
};

module.exports = { authentication };
