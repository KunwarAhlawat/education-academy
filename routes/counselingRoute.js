const express = require('express');
const router = express.Router();

// Your other routes

// Route for handling 404 errors
router.get('/order/:id', (req, res) => {
  const params = req.params.id
  const courseData = res.locals.commonData.Data;

  const courseViewData =  courseData.courseView.find(course => course.courseId === params)

  if(courseViewData.length === 0){
    return  res.render("notfound")
  } 


  res.render('counseling', { courseViewData })
});

module.exports = router;
