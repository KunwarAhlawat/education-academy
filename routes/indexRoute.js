const express = require("express")
const router = express.Router()
const homeCtrl = require("../controller/homeController")
    
// router.get("/" , (req, res)=>{
//     console.log(res.locals)
    
//     const courseData = res.locals.commonData.Data;
//     res.render('home' , {courseData})
// })


router.get("/" ,  homeCtrl.homePage )

router.get("/course_data" ,  homeCtrl.getAllCourses )
module.exports = router 