const { body, validationResult } = require('express-validator')

const userValidationRules = () => {
  return [
    body('firstName').notEmpty().withMessage('First name is required'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('mobileNum').isMobilePhone('any', { strictMode: false }).withMessage('Invalid or missing mobile number')  .custom((value) => {
      // Additional custom validation for 10 digits
      const isTenDigits = /^\d{10}$/.test(value);
      if (!isTenDigits) {
          throw new Error('Mobile number must be 10 digits');
      }
      return true;
  }),
    body('Courses').notEmpty().withMessage('Courses information is required'),
    body('Address').notEmpty().withMessage('Address is required'),
  ];
}

const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  // const extractedErrors = []
  // errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  // const extractedErrors = errors.array().map(err => ({
  //   name: err.param,   // Use err.param directly for the name attribute
  //   message: err.msg  
  // }));

     return res.send( errors)
  // return res.status(422).json({
  //   errors: extractedErrors,
  // })
 
}

module.exports = {
  userValidationRules,
  validate,
}