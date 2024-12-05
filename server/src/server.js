import express from 'express';
import bodyParser from 'body-parser';
import { configViewEngine } from './config/viewEngine';
import { initWebRoutes } from './route/web';
import multer from 'multer';
import dotenv from 'dotenv';
dotenv.config();


const app = express();

// config middleware
app.use(multer().none())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

configViewEngine(app);
initWebRoutes(app);


const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`App is running on the http://localhost:${port}`);
})

