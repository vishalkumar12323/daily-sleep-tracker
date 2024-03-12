const validate = (schema) => async (req, res, next) => {
  try {
    const parseBodyData = await schema.parseAsync(req.body);
    req.body = parseBodyData;
    next();
  } catch (e) {
    next(e);
  }
};

module.exports = { validate };
