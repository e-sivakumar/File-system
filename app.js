const express = require('express');
const fileRouter = require('./Router/fileRouter');
const { multerRouter } = require('./Router/multerRouter');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./Utils/swagger.json')

require("dotenv").config();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/api/multer', multerRouter)
app.use("/api/file", fileRouter)


app.listen(PORT, () => {
    console.log(`Backend running on ${PORT}`);
});