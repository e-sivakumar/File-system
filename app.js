const express = require('express');
const fileRouter = require('./Router/fileRouter');
const { multerRouter } = require('./Router/multerRouter');
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.use('/api/multer', multerRouter)
app.use("/api/file", fileRouter)


app.listen(PORT, () => {
    console.log(`Backend running on ${PORT}`);
});