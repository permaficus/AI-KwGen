import express, { Express, urlencoded } from 'express';
import { NODE_ENV, SERVICE_LOCAL_PORT } from '../constant/config';
import { router as v1 } from '../v1/router/router'
import cors from 'cors';

const httpServer: Express = express();

const serverInit = () => {
    httpServer.use(express.urlencoded({ extended: true }));
    httpServer.use(express.json());
    httpServer.use(cors());
    httpServer.use('v1', v1)
}

export { serverInit, httpServer, NODE_ENV, SERVICE_LOCAL_PORT }

