const express = require("express")
const router = express.Router()
const purchaseContl = require("../../controller/purchaseController")
const   uploadMiddleware  =  require("../../middlewares/uploadMiddleware")
 
 
 

router.post("/order"   , purchaseContl.createOrder )
router.post("/update_order"   , purchaseContl.update_order )

module.exports = router 