const express = require("express")
const router = express.Router()
const adminContl = require("../../controller/courseController")
const   uploadMiddleware  =  require("../../middlewares/uploadMiddleware")
 
 
router.get("/faq" , (req, res)=>{
     
     res.render('admin/faq' )
})


router.post("/faq" , uploadMiddleware  ,adminContl.courseCreate )

module.exports = router 