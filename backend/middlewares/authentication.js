const authentication = async (req, res, next) => {
  const token = req.headers["authorization"];
  try {
    console.log(token);
    res.json({ message: "successfully authorizing" });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

module.exports = { authentication };
