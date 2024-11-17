const fs = require('fs').promises;
const path = require('path');
const { multerDir } = require('./multerUtils');

const baseDir = path.join(__dirname, '../Public'); // Directory for storing files

const filePath = (fileName) => path.join(baseDir, fileName);

module.exports = {
    writeFile : async (fileName, content)=> {
        try{
            await fs.writeFile(filePath(fileName), content);
        }
        catch(err){
            console.log("err", err)
            throw err
        }
    },

    readFile : async (fileName)=> {
        try{
        const data = await fs.readFile(filePath(fileName), 'utf-8');
        return data;
        }
        catch(err){
            console.log("err", err)
            throw err
        }
    },

    updateFile : async (fileName, newContent) => {
        try{
            await fs.writeFile(filePath(fileName), newContent, { flag: 'w' });
        }
        catch(err){
            console.log("err", err)
            throw err
        }
    },

    deleteFile : async (fileName)=> {
        try{
            await fs.unlink(filePath(fileName));
        }
        catch(err){
            console.log("err", err)
            throw err
        }
    },

    listFiles : async(isMulter = false) =>{
        try {
            const dir = isMulter ? multerDir : baseDir;
            const files = await fs.readdir(dir);
            return files;
        } catch (err) {
            throw new Error('Failed to list files');
        }
    }
};
