const multer = require("multer");
const path = require('path');
const fs = require('fs');
const multerDir = path.join(__dirname, '../Public', 'Uploads'); // Directory for storing files

// Storage configuration for Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const uploadDir = multerDir;
      // Ensure the uploads directory exists
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }
      cb(null, uploadDir); // Specify the directory to store files
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + Math.round(Math.random() * 1E9);
      const extension = file.originalname.split('.').pop();
      cb(null, `${uniqueSuffix}.${extension}`); // Generate a unique name for the file
    }
  });

// Multer middleware
const upload = multer({ storage: storage });

module.exports = { multerDir, upload }