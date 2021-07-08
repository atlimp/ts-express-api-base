import express, { NextFunction, Request, Response } from 'express';
import { IBaseRouter } from "../interfaces/interfaces";
import { isHttpException } from '../util/util';

class MainRouter implements IBaseRouter {

    path = '/';
    router = express.Router();

    constructor() {
        this.initMiddleware();
        this.initRoutes();
    }

    initRoutes() {
        this.router.get('/', (req, res) => { res.send('<h1>Hello World!</h1>')});
    }

    initMiddleware() {

    }
}

export default MainRouter;