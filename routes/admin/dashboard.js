const express = require("express")
const router = express.Router()
const adminContl = require("../../controller/courseController")
const   uploadMiddleware  =  require("../../middlewares/uploadMiddleware")
 
 
router.get("/dashboard" , (req, res)=>{
     
     res.render('admin/dashboard' )
})


router.post("/dashboard" , uploadMiddleware  ,adminContl.courseCreate )

module.exports = router 