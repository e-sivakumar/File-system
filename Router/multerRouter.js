const express = require('express');
const multerRouter = express.Router();

const { upload } = require("../Utils/multerUtils");
const { uploadFile, fetchFile, listFiles, uploadMultiple } = require("../Controller/multerController");

// Upload a file
multerRouter.post('/upload', upload.single('file'), uploadFile);

//list files
multerRouter.get('/list', listFiles);
  
// Retrieve a file
multerRouter.get('/file/:filename', fetchFile);

// Multer middleware for handling multiple files (same field name)
multerRouter.post('/upload-multiple', upload.array('files', 10), uploadMultiple);
  

module.exports = {multerRouter}