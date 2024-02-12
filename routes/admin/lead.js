const express = require("express")
const router = express.Router()
const adminContl = require("../../controller/courseController")
const   uploadMiddleware  =  require("../../middlewares/uploadMiddleware")
 
 
router.get("/lead" , (req, res)=>{
     
     res.render('admin/lead' )
})


router.post("/lead" , uploadMiddleware  ,adminContl.courseCreate )

module.exports = router 