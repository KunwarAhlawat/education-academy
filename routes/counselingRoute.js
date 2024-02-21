const express = require('express');
const router = express.Router();
const courseModal = require("../modal/CourseModal")
// Your other routes

// Route for handling 404 errors
router.get('/order/:id', async (req, res) => {
  const params = req.params.id
  

  const courseViewData = await courseModal.findOne({where : { courseId  :params  }})

  if(courseViewData.length === 0){
    return  res.render("notfound")
  } 

  console.log("coursedata1 ============" , courseViewData)
  res.render('counselling', { courseViewData })
});

module.exports = router;
