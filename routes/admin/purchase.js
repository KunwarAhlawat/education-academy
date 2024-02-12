const express = require("express")
const router = express.Router()
const adminContl = require("../../controller/courseController")
const   uploadMiddleware  =  require("../../middlewares/uploadMiddleware")
 
 
router.get("/purchase" , (req, res)=>{
     
     res.render('admin/purchase' )
})


router.post("/purchase" , uploadMiddleware  ,adminContl.courseCreate )

module.exports = router 