const handleError = (err, req, res, next) => {
  const message = err[0].message || err?.message;
  res.status(200).json({ message });
};

module.exports = { handleError };
