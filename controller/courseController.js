const courseModel = require("../modal/CourseModal");
const { v4: uuidv4 } = require('uuid');

async function courseCreate(req, res) {
  try {
    const data = req.body;
    console.log("courseData" , data)
    console.log("uuid" , uuidv4())
    const result = await courseModel.create({
 
      courseId: uuidv4(),
      title: data.title,
      duration: data.duration,
      discountedPrice: data.discountedPrice,
      regularPrice: data.regularPrice,
      content: data.description,
      studyMode: data.studyMode,
      imgSrc: data.imgSrc,
      lecturesCount: data.lectureCount,
    });

    if (result) {
      res.status(201).send({ result, msg: "Registration successful" });
      console.log("New course created");
    }
  } catch (err) {
    console.error(err);
    // Handle error appropriately, e.g., send an error response
    res.status(500).send("Internal Server Error");
  }
}

 


function getStudents(req, res) {
  if (req.session.isLoggedIn) {

    studentModel
      .findAll()
      .then((data) => {
        // console.log("data1" , data);
        res.render("admin", {
          studentData: data,
        });
      })
      .catch((err) => console.log(err));
  } else {
    res.redirect("/login");
  }


}

function getStudentsTableData(req, res) {
  studentModel
    .findAll()
    .then((data) => {
      // console.log("data1" , data);
      res.status(200).json(data);
    })
    .catch((err) => console.log(err));
}


module.exports = { courseCreate, getStudents, getStudentsTableData };
