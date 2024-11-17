const { writeFile, readFile, updateFile, deleteFile, listFiles } = require('../Utils/fileUtils');

module.exports = {
    createFile: async (req, res) => {
        try {
            const { fileName, content } = req.body;
            const updatedFileName = fileName+".txt"
            console.log("ajs", updatedFileName)
            await writeFile(updatedFileName, content);
            res.status(201).json({ message: 'File created successfully' });
        } catch (err) {
            res.status(500).json({ error: 'Failed to create file' });
        }
    },

    readFile: async (req, res)=> {
        try {
            const { fileName } = req.params;
            const updatedFileName = fileName + ".txt";
            const content = await readFile(updatedFileName);
            res.status(200).json({ content });
        } catch (err) {
            res.status(500).json({ error: 'Failed to read file' });
        }
    },

    updateFile : async (req, res)=> {
        try {
            const { fileName } = req.params;
            const { newContent } = req.body;
            const updatedFileName = fileName + ".txt";
            await updateFile(updatedFileName, newContent);
            res.status(200).json({ message: 'File updated successfully' });
        } catch (err) {
            res.status(500).json({ error: 'Failed to update file' });
        }
    },

    deleteFile : async (req, res)=> {
        try {
            const { fileName } = req.params;
            const updatedFileName = fileName + ".txt";
            await deleteFile(updatedFileName);
            res.status(200).json({ message: 'File deleted successfully' });
        } catch (err) {
            res.status(500).json({ error: 'Failed to delete file' });
        }
    },

    listFiles : async (req, res) => {
        try {
            const files = await listFiles();
            const updatedFiles = files.filter((e)=> e!=='Uploads')
            res.status(200).json({ files: updatedFiles });
        } catch (err) {
            res.status(500).json({ error: err.message || 'Failed to list files' });
        }
    }
}

