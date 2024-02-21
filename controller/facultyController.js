const courseModel = require("../modal/CourseModal");
const FacultyModal = require("../modal//FacultyModal");
const batchCourseModal = require("../modal/BatchCourseModal");
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const { validationResult } = require('express-validator');
const fs = require('fs').promises;

async function facultyCreate(req, res) {
  try {
    // Validate the request using express-validator
    console.log(req.files);

    const errors = validationResult(req);
    const {
      name,
      email,
      contact,
      dob,
      specialization,
      qualification,
      experience,
      joiningDate,
      salary,
      mode,
      status,
      address,
      state,
      zipcode
    } = req.body;

    console.log("dataadddddd--------------------------------------------------", req.body);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check if the files are available in the request
    if (!req.files) {
      return res.status(400).json({ error: 'No file uploaded.' });
    }

    const files = req.files; // Array of files
    console.log("fileURLssssss" , files)

    
      const imageUrl = files.image.map(file => {
        // Assuming that the file path is saved in file.path
        const relativeFilePath = file.path;

        // Assuming your server is running on http://localhost:3000
        const baseURL = 'http://localhost:3000';

        // Use the path.join() method to create a complete URL for the file
        const fileURL = path.join('/assets/img/faculty/profile', path.basename(relativeFilePath));

        // Replace backslashes with forward slashes in the URL
        const normalizedFileURL = fileURL.replace(/\\/g, '/');

        return normalizedFileURL;
      });

      const resumeUrl = files.resume.map(file => {
        // Assuming that the file path is saved in file.path
        const relativeFilePath = file.path;

        // Assuming your server is running on http://localhost:3000
        const baseURL = 'http://localhost:3000';

        // Use the path.join() method to create a complete URL for the file
        const fileURL = path.join('/assets/img/faculty/resume', path.basename(relativeFilePath));

        // Replace backslashes with forward slashes in the URL
        const normalizedFileURL = fileURL.replace(/\\/g, '/');

        return normalizedFileURL;
      });


      console.log("fileURLs" , imageUrl , resumeUrl )
      // Save other data to the database
        await FacultyModal.create({
        facultyId: uuidv4(),
        name,
        email,
        contact,
        dob,
        specialization,
        qualification,
        experience,
        joiningDate,
        salary,
        mode,
        status,
        resume: resumeUrl[0] , // Assuming the first file is the resume
        image : imageUrl[0] ,
        address,
        state,
        zipcode
      });

      // console.log("facultyData======================================", facultyData);

      // Check if the faculty was created successfully
     

      // Send the response
      res.status(200).json({ message: 'Faculty created successfully!'   });
    
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error:', error);

    // Handle different types of errors with appropriate status codes
    if (error) {
      // Multer error (e.g., file size exceeded)
      return res.status(400).json({ error: error.message });
    } else {
      // Other unexpected errors
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

  

// get all courses
const getAllfaculties = async (req, res) => {
  try {
      // Assuming you have a valid Sequelize model named 'courseModel'
      const faculties = await FacultyModal.findAll();

      if (faculties.length === 0) {
          return res.json( "no data fournd" )
      }

      return res.json( faculties )
       
     //  return res.status(200).json(faculties);
  } catch (error) {
      console.error("Error fetching faculties:", error);

      // Check if the error is a Sequelize validation error
      if (error.name === 'SequelizeValidationError') {
          return res.status(400).json({ "error": "Validation error", "details": error.errors });
      }

       // Handle other types of errors
      return res.status(500).json({ "error": "Internal server error" });
  }
};
 
//  get student by id 
// Assuming 'id' is the parameter passed in the request
const getFacultyById = async (req, res) => {
  try {
    const facultyId = req.params.id; // Assuming the ID is in the request parameters
   
    // Assuming you have a valid Sequelize model named 'courseModel'
    const faculty = await FacultyModal.findByPk(facultyId);

    if (!faculty) {
      return res.status(404).json({ "error": "faculty not found" });
    }

    // Return the faculty as JSON or render it in a view
    return res.status(200).json(faculty);
  } catch (error) {
    console.error("Error fetching faculty by ID:", error);

    // Check if the error is a Sequelize validation error
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({ "error": "Validation error", "details": error.errors });
    }

    // Handle other types of errors
    return res.status(500).json({ "error": "Internal server error" });
  }
};

// delete faculty 
const deleteFaculty = async (req, res) => {
  try {
      // Assuming you have a valid Sequelize model named 'courseModel'
       
      console.log("delete" ,  req.params.id)
      const result = await FacultyModal.destroy({
          where: { facultyId: req.params.id}
      });

      if (result === 1) {
          // Successfully deleted one record
          res.json({ message: 'Course deleted successfully' });
      } else {
          // No records deleted (probably because the specified ID was not found)
          res.status(404).json({ error: 'Course not found or already deleted' });
      }
  } catch (error) {
      console.error("Error deleting course:", error);
      res.status(500).json({ error: 'Internal server error' });
  }
};
 
// new update faculty
async function facultyUpdate(req, res) {
  try {

    console.log("data===============================" , req.body)
   // Validate the request using express-validator
   const errors = validationResult(req);
  
 
   if (!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array() });
   }


    // Validate the request using express-validator
     const facultyId = req.params.id; // Assuming you are passing facultyId as a parameter

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check if the faculty with the given ID exists
    const existingFaculty = await FacultyModal.findByPk(facultyId);

    if (!existingFaculty) {
      return res.status(404).json({ error: 'Faculty not found.' });
    }

    // Compare the new data with the existing data
    const {
      name1,
      email1,
      contact1,
      dob1,
      specialization1,
      qualification1,
      experience1,
      joiningDate1,
      salary1,
      mode1,
      status1,
      address1,
      state1,
      zipcode1
    } = req.body;

    // Check if data has changed
    const hasDataChanged = (
      name1 !== existingFaculty.name ||
      email1 !== existingFaculty.email ||
      contact1 !== existingFaculty.contact ||
      dob1 !== existingFaculty.dob ||
      specialization1 !== existingFaculty.specialization ||
      qualification1 !== existingFaculty.qualification ||
      experience1 !== existingFaculty.experience ||
      joiningDate1 !== existingFaculty.joiningDate ||
      salary1 !== existingFaculty.salary ||
      mode1 !== existingFaculty.mode ||
      status1 !== existingFaculty.status ||
      address1 !== existingFaculty.address ||
      state1 !== existingFaculty.state ||
      zipcode1 !== existingFaculty.zipcode
    );

    let updateImage, updateResume;

    // If there are changes, update the relevant fields
    if (hasDataChanged) {
      // Check if new image is provided
      if (req.files && req.files.image && req.files.image.length > 0) {
        // Delete previous image
        await fs.unlink(existingFaculty.image);
        // Update image
        updateImage = req.files.image[0].path;
      }

      // Check if new resume is provided
      if (req.files && req.files.resume && req.files.resume.length > 0) {
        // Delete previous resume
        await fs.unlink(existingFaculty.resume);
        // Update resume
        updateResume = req.files.resume[0].path;
      }
    }

    // Update the faculty data
    await existingFaculty.update({
      name  : name1 ,
      email  : email1 ,
      contact  : contact1 ,
      dob  : dob1 ,
      specialization  : specialization1 ,
      qualification  : qualification1 ,
      experience  : experience1 ,
      joiningDate  : joiningDate1 ,
      salary  : salary1 ,
      mode  : mode1 ,
      status  : status1 ,
      address  : address1 ,
      state  : state1 ,
      zipcode  : zipcode1 ,
      image  :  updateImage || existingFaculty.image,
      resume  :  updateResume || existingFaculty.resume,
    },
    {
      where: { facultyId: facultyId }
    });

    console.log("faculty" , existingFaculty)
    // Send the response
    res.status(200).json({ message: 'Faculty updated successfully!' });
  } catch (error) {
    console.error('Error:', error);
    // Handle errors appropriately
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// faculty and course
// get all courses
const allFacultiesCourse = async (req, res) => {
  try {
      // Assuming you have a valid Sequelize model named 'courseModel'
      const faculties = await FacultyModal.findAll();
    console.log(faculties)
    if (faculties.length === 0) {
      return res.status(200).json(faculties);
  }
  

     // return res.render("admin/courseList" , {faculties})
       
       return res.status(200).json(faculties);
  } catch (error) {
      console.error("Error fetching faculties:", error);

      // Check if the error is a Sequelize validation error
      if (error.name === 'SequelizeValidationError') {
          return res.status(400).json({ "error": "Validation error", "details": error.errors });
      }

       // Handle other types of errors
      return res.status(500).json({ "error": "Internal server error" });
  }
};
 
 
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


module.exports = { facultyCreate, getStudents, getStudentsTableData ,allFacultiesCourse  ,getFacultyById , getAllfaculties , facultyUpdate ,deleteFaculty};