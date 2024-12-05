import express from 'express';
import HomeController from '../controllers/home.controller';

const homeController = new HomeController();
const homeRoute = express.Router();

homeRoute.get('/', homeController.index);

export default homeRoute;