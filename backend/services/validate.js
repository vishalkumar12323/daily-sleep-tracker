const validate = (schema) => async (req, res, next) => {
  try {
    const parseBodyData = await schema.parseAsync(req.body);
    req.body = parseBodyData;
    next();
  } catch (e) {
    const statusCode = 422;
    const message = e?.errors[0].message;

    const error = {
      statusCode,
      message,
    };
    next(error);
  }
};

module.exports = { validate };
