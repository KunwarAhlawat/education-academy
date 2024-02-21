const express = require("express")
const router = express.Router()
const facultyContl = require("../controller/facultyController")

 
const   upload_Multiple_Middleware  =  require("../middlewares/uploadMultipleMiddleware")

router.get("/faculty" , (req, res)=>{
     
     res.render('admin/faculty' )
})

// create course
router.post("/faculty" , upload_Multiple_Middleware  ,facultyContl.facultyCreate  )

// update course
router.put("/faculty_update/:id" , upload_Multiple_Middleware  , facultyContl.facultyUpdate  )


 

// get courses
router.get("/feculties"  ,facultyContl.getAllfaculties  )
 

// get facuty by id 
router.get("/faculty/:id"  , facultyContl.getFacultyById  )


// delete faculty
router.delete("/faculty_delete/:id"   ,facultyContl.deleteFaculty  )


// faculty and course 
router.get("/all_faculties"  , facultyContl.allFacultiesCourse)

module.exports = router