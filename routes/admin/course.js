const express = require("express")
const router = express.Router()
const adminContl = require("../../controller/courseController")
const   uploadMiddleware  =  require("../../middlewares/uploadMiddleware")
 
 
router.get("/course" , (req, res)=>{
     
     res.render('admin/course' )
})


 

// create course
router.post("/course" , uploadMiddleware  ,adminContl.courseCreate  )

// update course
router.put("/course_update/:id" , uploadMiddleware  ,adminContl.courseUpdate  )


// render courseListpage
// router.get("/courselists"  , (req , res)=>{
//      return res.render("admin/courseList")
// } )


// get courses
router.get("/courselistsData"  ,adminContl.getAllCourses  )
router.get("/courselists"  ,adminContl.getAllCourses)

// get courses api
router.get("/course_api"  ,adminContl.getAllCoursesApi  )


// get course by id 
router.get("/course/:id"  ,adminContl.getCourseById  )



// delete course
router.delete("/course_delete/:id"   ,adminContl.deleteCourse  )


// get courseview
router.get("/course_view/:id"  ,adminContl.getCourseView  )

module.exports = router 