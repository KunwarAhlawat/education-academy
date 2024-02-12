const express = require("express")
const router = express.Router()
const adminContl = require("../../controller/courseController")
const   uploadMiddleware  =  require("../../middlewares/uploadMiddleware")
 
 
router.get("/batch" , (req, res)=>{
     
     res.render('admin/batch' )
})


router.post("/batch" , uploadMiddleware  ,adminContl.courseCreate )

module.exports = router 