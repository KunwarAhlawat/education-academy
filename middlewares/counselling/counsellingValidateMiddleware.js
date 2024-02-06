const { body, validationResult } = require('express-validator')

const counsellingValidationRules = () => {
  return[
    body('firstName').notEmpty().withMessage('Please enter your first name')
      .isLength({ min: 2, max: 50 }).withMessage('First name must be between 2 and 50 characters'),

    body('lastName').notEmpty().withMessage('Please enter your last name')
      .isLength({ min: 2, max: 50 }).withMessage('Last name must be between 2 and 50 characters'),

    body('mobileNo').notEmpty().withMessage('Please enter your mobile number')
      .isNumeric().withMessage('Mobile number must be a valid number')
      .isLength({ min: 10, max: 10 }).withMessage('Mobile number must be 10 digits'),

    body('dateOfBirth').notEmpty().withMessage('Please enter your date of birth')
      .isDate().withMessage('Invalid date format'),

    body('gender').notEmpty().withMessage('Please select your gender'),

    body('hostel').notEmpty().withMessage('Please select whether you need hostel accommodation'),

    body('fatherName').notEmpty().withMessage('Please enter your father\'s name')
      .isLength({ min: 2, max: 50 }).withMessage('Father\'s name must be between 2 and 50 characters'),

    body('motherName').notEmpty().withMessage('Please enter your mother\'s name')
      .isLength({ min: 2, max: 50 }).withMessage('Mother\'s name must be between 2 and 50 characters'),

    body('bloodGroup').notEmpty().withMessage('Please select your blood group'),

    body('parentNo').notEmpty().withMessage('Please enter your parent\'s mobile number')
      .isNumeric().withMessage('Parent\'s mobile number must be a valid number')
      .isLength({ min: 10, max: 10 }).withMessage('Parent\'s mobile number must be 10 digits'),

    body('permanentAddress').notEmpty().withMessage('Please enter your permanent address'),

    body('guardian').notEmpty().withMessage('Please enter your guardian\'s name')
      .isLength({ min: 2, max: 50 }).withMessage('Guardian\'s name must be between 2 and 50 characters'),

    body('relationship').notEmpty().withMessage('Please enter your relationship with the guardian')
      .isLength({ min: 2, max: 50 }).withMessage('Relationship must be between 2 and 50 characters'),

    body('guardianMobile').notEmpty().withMessage('Please enter your guardian\'s mobile number')
      .isNumeric().withMessage('Guardian\'s mobile number must be a valid number')
      .isLength({ min: 10, max: 10 }).withMessage('Guardian\'s mobile number must be 10 digits'),

    body('guardianAddress').notEmpty().withMessage('Please enter your guardian\'s address'),

    body('programApplied').notEmpty().withMessage('Please enter the program you are applying for')
      .isLength({ min: 2, max: 50 }).withMessage('Program name must be between 2 and 50 characters'),

    body('entranceApplied').notEmpty().withMessage('Please enter the entrance exam date'),

    body('subjectApplied').notEmpty().withMessage('Please enter the subjects you are applying for')
      .isLength({ min: 2, max: 50 }).withMessage('Subjects must be between 2 and 50 characters'),

    body('reference').notEmpty().withMessage('Please enter the reference information')
      .isLength({ min: 2, max: 50 }).withMessage('Reference must be between 2 and 50 characters'),

    body('submitDate').notEmpty().withMessage('Please enter the submission date'),

    body('declaration').notEmpty().withMessage('Please agree to the declaration'),
  ];;
}

const counsellingValidate = (req, res, next) => {
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
  counsellingValidationRules,
  counsellingValidate,
}