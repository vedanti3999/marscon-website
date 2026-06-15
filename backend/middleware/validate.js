const { validationResult } = require('express-validator');

/**
 * Middleware to check express-validator results.
 * Place after validation rules and before the controller.
 */
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: errors.array()[0].msg,
      errors:  errors.array(),
    });
  }
  next();
};

module.exports = validate;
