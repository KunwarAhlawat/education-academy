const express = require("express")
const router = express.Router()
const batchContl = require("../../controller/batchController")
const   uploadMiddleware  =  require("../../middlewares/uploadMiddleware")
 
 
router.get("/batch" , (req, res)=>{
     
     res.render('admin/batch' )
})





// create course
router.post("/batch"     ,batchContl.createBatch  )

// // update batch
router.put("/batch_update/:id" , batchContl.updateBatch  )


// // render courseListpage
// // router.get("/courselists"  , (req , res)=>{
// //      return res.render("admin/courseList")
// // } )


 // get all batches
 
  router.get("/all_batches"  ,batchContl.getAllBatches)


 // get batch by id 
router.get("/batch/:id"  ,batchContl.getBatchById  )


// delete batch
router.delete("/batch_delete/:id"   ,batchContl.deleteBatch  )
 
 

module.exports = router 