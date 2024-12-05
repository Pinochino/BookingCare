import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';
import dotenv from 'dotenv';
import initWebRoutes from './route/route';
import configViewEngine from './config/viewEngine';
import { connectDb } from './config/ConnectDb';
dotenv.config();


const app = express();

// config middleware
app.use(multer().none())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

configViewEngine(app);
initWebRoutes(app);
connectDb();

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`App is running on the http://localhost:${port}`);
})

