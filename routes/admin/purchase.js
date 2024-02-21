const express = require("express")
const router = express.Router()
const courseContl = require("../../controller/courseController")
const adminContl = require("../../controller/adminController")
const   uploadMiddleware  =  require("../../middlewares/uploadMiddleware")
 
 
router.get("/purchase" , (req, res)=>{
     
     res.render('admin/purchase' )
})


// purchase api
router.get("/purchase_api" , adminContl.getPurchaseData)



router.post("/purchase" , uploadMiddleware  ,courseContl.courseCreate )

module.exports = router 