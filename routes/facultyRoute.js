const express = require("express")
const router = express.Router()
 

router.get("/faculty/:id" , (req, res)=>{
    const params = req.params.id
    const facultyData = res.locals.commonData.Data.faculty;

    const faculty =  facultyData.find( faculty => faculty.facultyId === params)

    res.render('faculty' , {faculty})
})

module.exports = router