const authService = require('../services/auth.service');
const { validateRegisterInput } = require('../utils/authValidation');

exports.register = async (req, res, next) => {
  try {
    const { isValid, errors, value } = validateRegisterInput(req.body);

    if (!isValid) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors,
      });
    }

  } catch (error) {
    return next(error);
  }
};
