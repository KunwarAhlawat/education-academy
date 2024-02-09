const express = require("express")
const router = express.Router()
const adminContl = require("../../controller/courseController")
 
    
router.get("/course" , (req, res)=>{
     
     res.render('admin/course' )
})


router.post("/course" , adminContl.courseCreate )

module.exports = router 