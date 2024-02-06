const express = require("express")
const router = express.Router()
const courseData = require("../database/data")

router.get("/courseview/:id" , (req , res )=>{
    const params = req.params.id
    const courseData = res.locals.commonData.Data;

    const courseViewData =  courseData.courseView.find(course => course.courseId === params)
 
    if(courseViewData.length === 0){
      return  res.render("notfound")
    } 
    res.render("courseView" , {courseViewData })
})  

module.exports = router