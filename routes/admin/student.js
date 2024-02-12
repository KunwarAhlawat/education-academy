const express = require("express")
const router = express.Router()
const adminContl = require("../../controller/courseController")
const   uploadMiddleware  =  require("../../middlewares/uploadMiddleware")
 
 
router.get("/student" , (req, res)=>{
     
     res.render('admin/student' )
})


router.post("/student" , uploadMiddleware  ,adminContl.courseCreate )

module.exports = router 