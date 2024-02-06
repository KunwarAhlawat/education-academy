const express = require("express")
const router = express.Router()
 

router.get("/courses" , (req, res)=>{
    const courseData = res.locals.commonData.Data;


    res.render('courseList' , {courseData})
})

module.exports = router