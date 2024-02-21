const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder;

    // Check the field name to determine the folder
    if (file.fieldname === 'image') {
      folder = 'public/assets/img/faculty/profile';
    } else if (file.fieldname === 'resume') {
      folder = 'public/assets/img/faculty/resumes';
    } else {
      // Default folder if field name is not recognized
      folder = 'public/assets/img/faculty';
    }

    cb(null, folder);

   },
  filename: (req, file, cb) => {
    const uniqueName = `${uuidv4()}-${file.originalname}`; // Generate a unique filename
    cb(null, uniqueName);
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5 // Limit file size to 5MB
  },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|webp|pdf/; // Accepted file types
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);
    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file format. Only images (jpeg, jpg, png, gif) and PDFs are allowed.'));
    }
  }
});

const upload_Multiple_Middleware = (req, res, next) => {
    // Using the `upload.fields` middleware for handling multiple files with different field names
    upload.fields([
      { name: 'image', maxCount: 1 },   // 'avatar' field for faculty image, allowing only 1 file
      { name: 'resume', maxCount: 1 }    // 'resume' field for faculty resume, allowing only 1 file
    ])(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        // Multer error (e.g., file size exceeded)
        if (err.code === 'LIMIT_FILE_SIZE') {
          return res.status(400).json({ error: 'File size exceeds the limit (5MB).' });
        } else {
          return res.status(400).json({ error: err.message });
        }
      } else if (err) {
        // Check for specific error related to file format
        if (err.message === 'Invalid file format. Only images (jpeg, jpg, png, gif) are allowed.') {
          return res.status(400).json({ error: err.message });
        } else {
          return res.status(500).json({ error: 'Internal Server Error' });
        }
      }
  
      // No error, continue to the next middleware or controller
      next();
    });
  };


module.exports = upload_Multiple_Middleware;
