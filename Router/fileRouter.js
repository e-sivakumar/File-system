const express = require('express');
const fileRouter = express.Router();
const { createFile, readFile, updateFile, deleteFile, listFiles } = require('../Controller/fileController');

fileRouter.post('/create', createFile);
fileRouter.get('/:fileName', readFile);
fileRouter.put('/:fileName', updateFile);
fileRouter.delete('/:fileName', deleteFile);
fileRouter.get('/', listFiles);

module.exports = fileRouter;
