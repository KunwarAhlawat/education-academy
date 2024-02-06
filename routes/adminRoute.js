const express = require('express');
const router = express.Router();



// ============================== student Registration form ============================
const adminContl = require("../controller/adminController")
const { userValidationRules, validate } = require('../middlewares/validateMiddleware');


// ============================== student  admin route ============================
// for register students
router.post('/admin', userValidationRules(),validate, adminContl.registerStudents);
router.get('/admin', adminContl.getStudents);

router.get('/getStudentsTableData', adminContl.getStudentsTableData);



// ============================== counselling form ============================
// const cousnellingContl = require("../controller/counsellingController")

// const { counsellingValidationRules, counsellingValidate } = require('../middlewares/counselling/counsellingValidateMiddleware');


// router.post('/counselling', counsellingValidationRules() , counsellingValidate ,cousnellingContl.counsellingFormCtrl);



module.exports = router;
