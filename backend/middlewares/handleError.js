const handleError = (err, req, res, next) => {
  const { statusCode, message } = err;
  res.status(statusCode).json({ message });
};

module.exports = { handleError };
