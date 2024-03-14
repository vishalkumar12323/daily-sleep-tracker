const handleError = (err, req, res, next) => {
  const { statusCode, message } = err;
  console.log(statusCode);
  res.status(statusCode || 500).json({ message });
};

module.exports = { handleError };
