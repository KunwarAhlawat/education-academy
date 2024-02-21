const courseModel = require("../modal/CourseModal");
const batchCourseModal = require("../modal/BatchCourseModal");
const facultyCourseModal = require("../modal/FacultyCourseModal");
const batchModal = require("../modal/BatchModal");
const facultyModal = require("../modal/FacultyModal");
const faqModal = require("../modal/FaqModal");
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const { validationResult } = require('express-validator');
 
  async function courseCreate(req, res) {
  try {
    // Validate the request using express-validator
    const errors = validationResult(req);
     const data = req.body 
    console.log("dataa--------------------------------------------------" ,req.body) 
    // console.log(req.file) 
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check if the file is available in the request
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded.' });
    } 

    // Assuming that the file path is saved in req.file.path
    const relativeFilePath = req.file.path;

    // Assuming your server is running on http://localhost:3000
    const baseURL = 'http://localhost:3000';

    // Use the path.join() method to create a complete URL for the file
    const fileURL = path.join('/assets/img/courses', path.basename(relativeFilePath));

    // Replace backslashes with forward slashes in the URL
    const normalizedFileURL = fileURL.replace(/\\/g, '/');

    
 
    const courseData =  await courseModel.create({
      courseId :  uuidv4(),
      title : data.title,
      duration : data.duration,
      regularPrice : data.regularPrice,
      discountedPrice : data.discountedPrice,
      lecturesCount : data.lectureCount,
      studyMode : data.studyMode,
      content : data.content, 
      imageSrc : normalizedFileURL
    })
 

    console.log("courseData======================================" ,courseData )

   // Check if the course was created successfully
        if (courseData) {
          // Associate the course with batches in batchCourseModal using async/await
          if (!Array.isArray(data.batches)) {
            await batchCourseModal.create({
              id: uuidv4(),
              courseId: courseData.courseId,
              batchId: data.batches,
            });
          } else {
            for (const batchId of data.batches) {
              await batchCourseModal.create({
                id: uuidv4(),
                courseId: courseData.courseId,
                batchId: batchId,
              });
            }
          }

          // Associate the course with faculties in facultyCourseModal using async/await
          if (!Array.isArray(data.faculties)) {
            await facultyCourseModal.create({
              id: uuidv4(),
              courseId: courseData.courseId,
              facultyId: data.faculties,  
            });
          } else {
            for (const facultyId of data.faculties) {
              await facultyCourseModal.create({
                id: uuidv4(),
                courseId: courseData.courseId,
                facultyId: facultyId,
              });
            }
          }

          // Transforming arrays into an array of objects
          if (!Array.isArray(data.faq)) {
            await faqModal.create({
              faqId: uuidv4(),
              courseId: courseData.courseId,
              question: data.faq, 
              answer: data.Answer, 
            });
          } else {
            // Transforming arrays into an array of objects
            const faqObjects = data.faq.map((faq, index) => ({
              faq,
              answer: data.Answer[index]
            }));

            for (const faqObj of faqObjects) {
              await faqModal.create({
                faqId: uuidv4(),
                courseId: courseData.courseId,
                question: faqObj.faq, 
                answer: faqObj.answer, 
              });
            }
          }
        }

    res.send({ message: 'Course Created successfully!' });
  
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error:', error);
  
    // Handle different types of errors with appropriate status codes
    if (error  ) {
      // Multer error (e.g., file size exceeded)
      return res.status(400).json({ error: error.message });
    } else {
      // Other unexpected errors
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

  

// get all courses
const getAllCourses = async (req, res) => {
  try {
      // Assuming you have a valid Sequelize model named 'courseModel'
      const courses = await courseModel.findAll();

      if (courses.length === 0) {
          return res.render("admin/courseList" , {courses})
      }

      return res.render("admin/courseList" , {courses})
       
     //  return res.status(200).json(courses);
  } catch (error) {
      console.error("Error fetching courses:", error);

      // Check if the error is a Sequelize validation error
      if (error.name === 'SequelizeValidationError') {
          return res.status(400).json({ "error": "Validation error", "details": error.errors });
      }

       // Handle other types of errors
      return res.status(500).json({ "error": "Internal server error" });
  }
};


// get all courses Api
const getAllCoursesApi = async (req, res) => {
  try {
      // Assuming you have a valid Sequelize model named 'courseModel'
      const courses = await courseModel.findAll();

      if (courses.length === 0) {
          return res.json( {courses})
      }

     
       
       return res.status(200).json(courses);
  } catch (error) {
      console.error("Error fetching courses:", error);

      // Check if the error is a Sequelize validation error
      if (error.name === 'SequelizeValidationError') {
          return res.status(400).json({ "error": "Validation error", "details": error.errors });
      }

       // Handle other types of errors
      return res.status(500).json({ "error": "Internal server error" });
  }
};

//  get student by id 
 
const getCourseById = async (req, res) => {
  try {
    const courseId = req.params.id; // Assuming the ID is in the request parameters
   
    // Assuming you have a valid Sequelize model named 'courseModel'
    const course = await courseModel.findByPk(courseId);

    if (!course) {
      return res.status(404).json({ "error": "Course not found" });
    }

    // Return the course as JSON or render it in a view
    return res.status(200).json(course);
  } catch (error) {
    console.error("Error fetching course by ID:", error);

    // Check if the error is a Sequelize validation error
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({ "error": "Validation error", "details": error.errors });
    }

    // Handle other types of errors
    return res.status(500).json({ "error": "Internal server error" });
  }
};

// delete course 
const deleteCourse = async (req, res) => {
  try {
      // Assuming you have a valid Sequelize model named 'courseModel'
       
      console.log("delete" ,  req.params.id)
      const result = await courseModel.destroy({
          where: { courseId: req.params.id}
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
 
// new update course
async function courseUpdate(req, res) {
  try {
    // Validate the request using express-validator
    const errors = validationResult(req);
    const data = req.body;

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Assuming your server is running on http://localhost:3000
    const baseURL = 'http://localhost:3000';

    // Check if the file is available in the request
    let fileURL = null;
    if (req.file) {
      // Assuming that the file path is saved in req.file.path
      const relativeFilePath = req.file.path;

      // Use the path.join() method to create a complete URL for the file
      fileURL = path.join('/assets/img', path.basename(relativeFilePath));

      // Replace backslashes with forward slashes in the URL
      fileURL = fileURL.replace(/\\/g, '/');
    }

    // Assuming you have a Sequelize model named 'courseModel'
    const courseIdToUpdate = req.params.id; // Assuming you pass courseId as a parameter in the URL

    // Find the course to update
    const existingCourse = await courseModel.findOne({
      where: { courseId: courseIdToUpdate },
    });

    if (!existingCourse) {
      return res.status(404).json({ error: 'Course not found.' });
    }

    // Compare existing data with the new data
    if (data.title !== existingCourse.title) {
      existingCourse.title = data.title;
    }
    if (data.duration !== existingCourse.duration) {
      existingCourse.duration = data.duration;
    }
    if (data.regularPrice !== existingCourse.regularPrice) {
      existingCourse.regularPrice = data.regularPrice;
    }
    if (data.discountedPrice !== existingCourse.discountedPrice) {
      existingCourse.discountedPrice = data.discountedPrice;
    }
    if (data.lectureCount !== existingCourse.lecturesCount) {
      existingCourse.lecturesCount = data.lectureCount;
    }
    if (data.studyMode !== existingCourse.studyMode) {
      existingCourse.studyMode = data.studyMode;
    }
    if (data.content !== existingCourse.content) {
      existingCourse.content = data.content;
    }
    if (fileURL !== null && fileURL !== existingCourse.imageSrc) {
      existingCourse.imageSrc = fileURL;
    }

    // Save the updated course to the database
    await existingCourse.save();

    // Send the normalized file URL in the response
    res.json({ message: 'Course updated successfully!' });
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



// / course view 
const getCourseView = async (req, res) => {
  try {
    const courseId = req.params.id; // Assuming the ID is in the request parameters
   
    // Assuming you have a valid Sequelize model named 'courseModel'
    const course = await courseModel.findByPk(courseId);

    if (!course) {
      return res.status(404).json({ "error": "Course not found" });
    }

    if(course){
      // find batches
      const batches = await batchCourseModal.findAll({where : {
        courseId : course.courseId
      }})
 
   
      const batchDetails = [];

      for (const batch of batches) {
        const batchDetail  = await batchModal.findAll({where : {
          id : batch.batchId
        }})
        batchDetails.push(batchDetail );
      }
    

      // find faculties
      const faculties = await facultyCourseModal.findAll({where : {
        courseId : course.courseId
      }})


      const faculyDetails = []; 

      for (const faculty of faculties) {
        const faculyDetail = await facultyModal.findAll({where : {
          facultyId : faculty.facultyId
        }}) 
        faculyDetails.push(faculyDetail );
      }
    
      // find faqs
      const faqs = await faqModal.findAll({where : {
        courseId : course.courseId
      }})
     
           return    res.render("courseView" , {"courseData" :  {"course" : course , "batches" :batchDetails ,  "faculties" : faculyDetails  , "faqs" : faqs  }})
      //   return res.status(200).json({"course" : course , "batches" :batchDetails ,  "faculties" : faculyDetails  , "faqs" : faqs});
    }
    // Return the course as JSON or render it in a view
   
  } catch (error) {
    console.error("Error fetching course by ID:", error);

    // Check if the error is a Sequelize validation error
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({ "error": "Validation error", "details": error.errors });
    }

    // Handle other types of errors
    return res.status(500).json({ "error": "Internal server error" });
  }
};
module.exports = { courseCreate, getCourseView , getAllCoursesApi ,getStudents, getStudentsTableData  ,getCourseById , getAllCourses , courseUpdate ,deleteCourse};