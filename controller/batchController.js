const batchModel = require("../modal/BatchModal");
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const { validationResult } = require('express-validator');
 
async function createBatch(req, res) {
  try {
    // Validate the request using express-validator
    const errors = validationResult(req);

    // Check for validation errors
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Extract relevant data from the request body
    const { name, startTime, endTime, description, mode, startDate,totalLectures, endDate } = req.body;

    // Create a new batch using Sequelize model
    const newBatch = await batchModel.create({
      id: uuidv4(),
      title: name,
      startTime,
      endTime,
      description,
      mode,
      startDate,
      endDate,
      totalLectures
    });

    // Return success response with the created batch
    return res.status(201).json({ message: 'Batch created successfully', batch: newBatch });
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error:', error);

    // Handle different types of errors with appropriate status codes
    if (error.name === 'SequelizeValidationError') {
      // Sequelize validation error (e.g., invalid data types)
      return res.status(400).json({ error: error.message });
    } else if (error.name === 'SequelizeUniqueConstraintError') {
      // Sequelize unique constraint error (e.g., duplicate key)
      return res.status(400).json({ error: 'Duplicate entry. Batch with the same title already exists.' });
    } else {
      // Other unexpected errors
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

  
 
// get all courses
const getAllBatches = async (req, res) => {
  try {
      // Assuming you have a valid Sequelize model named 'courseModel'
      const batches = await batchModel.findAll();
    console.log(batches)
    if (batches.length === 0) {
      return res.status(200).json(batches);
  }
  

     // return res.render("admin/courseList" , {batches})
       
       return res.status(200).json(batches);
  } catch (error) {
      console.error("Error fetching batches:", error);

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
const getBatchById = async (req, res) => {
  try {
    const id = req.params.id; // Assuming the ID is in the request parameters
   
    // Assuming you have a valid Sequelize model named 'courseModel'
    const batch = await batchModel.findByPk(id);

    if (!batch) {
      return res.status(404).json({ "error": "batch not found" });
    }

    // Return the batch as JSON or render it in a view
    return res.status(200).json(batch);
  } catch (error) {
    console.error("Error fetching batch by ID:", error);

    // Check if the error is a Sequelize validation error
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({ "error": "Validation error", "details": error.errors });
    }

    // Handle other types of errors
    return res.status(500).json({ "error": "Internal server error" });
  }
};

// delete batch 
const deleteBatch = async (req, res) => {
  try {
      // Assuming you have a valid Sequelize model named 'courseModel'
       
      console.log("delete" ,  req.params.id)
      const result = await batchModel.destroy({
          where: { id: req.params.id}
      });

      if (result === 1) {
          // Successfully deleted one record
          res.json({ message: 'batch deleted successfully' });
      } else {
          // No records deleted (probably because the specified ID was not found)
          res.status(404).json({ error: 'batch not found or already deleted' });
      }
  } catch (error) {
      console.error("Error deleting batch:", error);
      res.status(500).json({ error: 'Internal server error' });
  }
};
 
// new update course
async function updateBatch(req, res) {
  try {
    // Validate the request using express-validator
    const errors = validationResult(req);
    const data = req.body;

    console.log("batch" , req.body)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Assuming you pass batchId as a parameter in the URL
    const batchIdToUpdate = req.params.id;

    // Find the batch to update
    const existingBatch = await batchModel.findOne({
      where: { id: batchIdToUpdate },
    });

    if (!existingBatch) {
      return res.status(404).json({ error: 'Batch not found.' });
    }

    // Compare existing data with the new data
    if (data.title !== existingBatch.title) {
      existingBatch.title = data.title;
    }
     if (data.totalLectures !== existingBatch.totalLectures) {
      existingBatch.totalLectures = data.totalLectures;
    }
    
    if (data.mode !== existingBatch.mode) {
      existingBatch.mode = data.mode;
    }
    if (data.startTime !== existingBatch.startTime) {
      existingBatch.startTime = data.startTime;
    }
    if (data.endTime !== existingBatch.endTime) {
      existingBatch.endTime = data.endTime;
    }
    if (data.startDate !== existingBatch.startDate) {
      existingBatch.startDate = data.startDate;
    }
    if (data.endDate !== existingBatch.endDate) {
      existingBatch.endDate = data.endDate;
    }
    if (data.description !== existingBatch.description) {
      existingBatch.description = data.description;
    }

    // Save the updated batch to the database
    await existingBatch.save();

    // Send the response
    res.json({ message: 'Batch updated successfully!' });
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error:', error);

    // Handle different types of errors with appropriate status codes
    if (error.name === 'SequelizeValidationError') {
      // Sequelize validation error
      return res.status(400).json({ error: 'Validation error', details: error.errors });
    } else if (error.name === 'SequelizeUniqueConstraintError') {
      // Unique constraint error
      return res.status(400).json({ error: 'Unique constraint violation', details: error.errors });
    } else {
      // Other unexpected errors
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

// update course

// async function courseUpdate(req, res) {
//   try {
//     // Validate the request using express-validator
//     const errors = validationResult(req);
//     const data = req.body;
//     console.log("Data" , req.body)
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
 
//     // Check if the file is available in the request
//     if (!req.file) {
//       return res.status(400).json({ error: 'No file uploaded.' });
//     }
 
//     // Assuming that the file path is saved in req.file.path
//     const relativeFilePath = req.file.path;

//     // Assuming your server is running on http://localhost:3000
//     const baseURL = 'http://localhost:3000';

//     // Use the path.join() method to create a complete URL for the file
//     const fileURL = path.join('/assets/img', path.basename(relativeFilePath));

//     // Replace backslashes with forward slashes in the URL
//     const normalizedFileURL = fileURL.replace(/\\/g, '/');

//     // Assuming you have a Sequelize model named 'courseModel'
//     const courseIdToUpdate = req.params.id; // Assuming you pass courseId as a parameter in the URL
//     console.log("id" , courseIdToUpdate)
//     // Find the course to update
//     const existingCourse = await courseModel.findOne({
//       where: { courseId: courseIdToUpdate },
//     });

//     if (!existingCourse) {
//       return res.status(404).json({ error: 'Course not found.' });
//     }

//     // Update the course details and image URL
//     existingCourse.title = data.title;
//     existingCourse.duration = data.duration;
//     existingCourse.regularPrice = data.regularPrice;
//     existingCourse.discountedPrice = data.discountedPrice;
//     existingCourse.lecturesCount = data.lectureCount;
//     existingCourse.studyMode = data.studyMode;
//     existingCourse.content = data.content;
//     existingCourse.imageSrc = normalizedFileURL;

//     // Save the updated course to the database
//     await existingCourse.save();

//     // Log  the relative file path and normalized file URL
//     // console.log('Relative File Path:', relativeFilePath);
//     // console.log('Normalized File URL:', normalizedFileURL);

//     // Send the normalized file URL in the response
//     res.json({ message: 'Course updated successfully!' });
//   } catch (error) {
//     // Log the error for debugging purposes
//     console.error('Error:', error);

//     // Handle different types of errors with appropriate status codes
//     if (error   ) {
//       // Multer error (e.g., file size exceeded)
//       return res.status(400).json({ error: error.message });
//     } else {
//       // Other unexpected errors
//       return res.status(500).json({ error: 'Internal Server Error' });
//     }
//   }
// }

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


module.exports = { createBatch, getStudents, getStudentsTableData  ,getBatchById , getAllBatches , updateBatch ,deleteBatch};
