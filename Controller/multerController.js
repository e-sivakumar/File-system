const { listFiles } = require("../Utils/fileUtils");
const {multerDir} = require("../Utils/multerUtils");
const path = require('path');
const fs = require('fs')


module.exports = {
uploadFile : (req, res) => {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }
    res.status(200).json({  
      message: 'File uploaded successfully.',
      filePath: req.file.path,
    });
},
uploadMultiple: (req, res) => {
    // 'files' should match the field name in the request
    if (!req.files || req.files.length === 0) {
      return res.status(400).send('No files uploaded.');
    }
  
    res.status(200).json({
      message: 'Files uploaded successfully.',
      files: req.files.map(file => ({
        filename: file.filename,
        path: file.path,
      })),
    });
},

fetchFile: (req, res)=> {
    const fileName = req.params.filename;
    const filePath = path.join(multerDir, fileName);
  
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).send('File not found.');
    }
  
    res.sendFile(filePath);
},

listFiles : async (req, res) => {
    try {
        const files = await listFiles(true);
        res.status(200).json({ files });
    } catch (err) {
        res.status(500).json({ error: err.message || 'Failed to list files' });
    }
}
}