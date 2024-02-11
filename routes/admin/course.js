const express = require("express")
const router = express.Router()
const adminContl = require("../../controller/courseController")
const   uploadMiddleware  =  require("../../middlewares/uploadMiddleware")
 
 
router.get("/course" , (req, res)=>{
     
     res.render('admin/course' )
})


router.post("/course" , uploadMiddleware  ,adminContl.courseCreate )

module.exports = router 