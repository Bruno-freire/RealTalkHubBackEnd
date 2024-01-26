import "reflect-metadata";
import "@shared/container";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { AppDataSource } from "../typeorm/data-source";
import '../../container'
import { router } from "./routes";
import { appErrorHandler } from "./middlewares/appErrorHandler";
import WebSocket from 'ws';
import http from 'http';
import WebSocketService from "@modules/websockets/webSocketService";
import morgan from "morgan";

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new WebSocket.Server({ server });

AppDataSource.initialize().then(async () => {
    console.log('successfully connected to the database')
}).catch(error => console.log(error.message))

app.use(cors());

app.use(express.json());

app.use(morgan('dev'))

app.use(router)

app.use(appErrorHandler);

const webSocketService = new WebSocketService(server);

export { server };