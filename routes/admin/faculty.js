const express = require("express")
const router = express.Router()
const adminContl = require("../../controller/courseController")
const   uploadMiddleware  =  require("../../middlewares/uploadMiddleware")
 
 
router.get("/faculty" , (req, res)=>{
     
     res.render('admin/faculty' )
})


router.post("/faculty" , uploadMiddleware  ,adminContl.courseCreate )

module.exports = router 