const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/assets/img/'); // Destination folder for storing uploaded files
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
    const fileTypes = /jpeg|jpg|png|webp/; // Accepted file types
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);
    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file format. Only images (jpeg, jpg, png, gif) are allowed.'));
    }
  }
});

const uploadMiddleware = (req, res, next) => {
  // Using the `upload.single('file')` middleware
  upload.single('file')(req, res, (err) => {
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

module.exports = uploadMiddleware;
