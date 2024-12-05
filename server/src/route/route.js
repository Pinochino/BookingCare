import homeRoute from "./home.route";

const initWebRoutes = (app) => {
    app.use('/', homeRoute);
}

export default initWebRoutes;