const validate = (schema) => async (req, res, next) => {
  try {
    const parseBodyData = await schema.parseAsync(req.body);
    req.body = parseBodyData;
    next();
  } catch (e) {
    const statusCode = 500;
    const message = e.issues[0].message || "please fill the input properly";

    const errorDetails = { statusCode, message };
    next(errorDetails);
  }
};

module.exports = { validate };
