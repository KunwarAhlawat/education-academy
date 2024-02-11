const courseModel = require("../modal/CourseModal");
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const { validationResult } = require('express-validator');

  function courseCreate(req, res) {
  try {
    // Validate the request using express-validator
    const errors = validationResult(req);
    console.log(req.body)
    console.log(req.file)
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
    const fileURL = path.join(baseURL, 'assets/img', path.basename(relativeFilePath));

    // Replace backslashes with forward slashes in the URL
    const normalizedFileURL = fileURL.replace(/\\/g, '/');

    // Save the file URL to the database or perform other operations
    // ...

    // Log the relative file path and normalized file URL
    console.log('Relative File Path:', relativeFilePath);
    console.log('Normalized File URL:', normalizedFileURL);

    // Send the normalized file URL in the response
    res.send({ message: 'File uploaded successfully!' });

  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error:', error);

    // Handle different types of errors with appropriate status codes
    if (error instanceof multer.MulterError) {
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


module.exports = { courseCreate, getStudents, getStudentsTableData };
