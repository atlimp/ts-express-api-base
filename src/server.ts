import App from './app';
import MainRouter from './routers/mainrouter';
import dotenv from 'dotenv';
dotenv.config();

const host: string = process.env.HOST || 'localhost';
const port: number = Number(process.env.PORT) || 3000;

const app = new App({
    host,
    port,
    routers: [
        new MainRouter(),
    ]
}).listen();
