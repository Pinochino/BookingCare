import express from 'express';

const router = express.Router();

export const initWebRoutes = (app) => {

    router.get('/', (req, res) => {
        res.send('Hello, World');
    });

    return app.use('/', router);
}