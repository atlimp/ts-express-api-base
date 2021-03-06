import express, { Application } from 'express';
import errorMiddleWare from './middleware/errormiddleware';
import { IBaseRouter } from './interfaces/interfaces';
import cors from 'cors';

class App {
    private app: Application;
    private host: string;
    private port: number;

    constructor(args: {
        host: string,
        port: number,
        routers: IBaseRouter[]
    }) {
        this.app = express();
        this.host = args.host;
        this.port = args.port;
        this.config();
        this.initMiddleWare();
        this.initRouters(args.routers);
        this.initErrorHandling();
        this.assets();
        this.template();
    }

    initRouters(routers: IBaseRouter[]) {
        routers.forEach(e => this.app.use(e.path, e.router));
    }

    initMiddleWare() {

    }

    private config() {
        this.app.use(express.json());
        this.app.use(cors());
    }

    private assets() {
    }

    private template() {
    }

    initErrorHandling() {
        this.app.use(errorMiddleWare);
    }


    listen() {
        this.app.listen(this.port, this.host, () => {
            console.log(`Server listening on ${this.host}:${this.port}`);
        });
    }
}

export default App;
