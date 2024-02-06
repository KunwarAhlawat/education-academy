const express = require("express")
const router = express.Router()
  
    
router.get("/" , (req, res)=>{
    console.log(res.locals)
    
    const courseData = res.locals.commonData.Data;
    res.render('home' , {courseData})
})

module.exports = router 