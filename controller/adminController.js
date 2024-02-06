const studentModel = require("../modal/RegisterStudent")
  
function registerStudents(req, res) {
  const data = req.body;

  // Check if there are validation errors
  if (data.errors && Array.isArray(data.errors) && data.errors.length > 0) {
    // Handle validation errors
    return res.status(422).json({ errors: data.errors });
  }

  let emailDuplicate = false;
  let mobileDuplicate = false;

  studentModel.findOne({ where: { email: data.email } }).then((result) => {
    if (result !== null) {
      emailDuplicate = true;
    }
  }).then(() => {
    return studentModel.findOne({ where: { mobileNum: data.mobileNum } });
  }).then((result) => {
    if (result !== null) {
      mobileDuplicate = true;
    }
  }).then(() => {
    if (emailDuplicate && mobileDuplicate) {
      res.send({ msg: "Email and Mobile number already exist" });
    } else if (emailDuplicate) {
      res.send({ msg: "Email already exists" });
    } else if (mobileDuplicate) {
      res.send({ msg: "Mobile number already exists" });
    } else {
      // If there are no validation errors and email/mobileNum are unique, proceed with your logic
      console.log(data);
      return studentModel.create({
        name: data.firstName,
        email: data.email,
        mobileNum: data.mobileNum,
        courses: data.Courses,
        address: data.Address,
      });
    }
  }).then((result) => {
    if (result) {
      res.send({ result, msg: "Registration successful" });
      console.log("New student created");
    }
  }).catch((err) => {
    console.log(err);
    // Handle error appropriately, e.g., send an error response
    res.status(500).send("Internal Server Error");
  });
}


function getStudents(req, res ){
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

function getStudentsTableData(req, res ){
  studentModel
  .findAll()
  .then((data) => {
    // console.log("data1" , data);
    res.status(200).json(data);
  })
  .catch((err) => console.log(err));
}
module.exports = { registerStudents  , getStudents ,getStudentsTableData};
