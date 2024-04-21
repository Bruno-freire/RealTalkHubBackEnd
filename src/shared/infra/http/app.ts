import "reflect-metadata";
import "@shared/container";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { AppDataSource } from "../typeorm/data-source";
import '../../container'
import { router } from "./routes";
import { appErrorHandler } from "./middlewares/appErrorHandler";
import http from 'http';
import morgan from "morgan";
import { Server } from "socket.io";
import { Message } from "@modules/accounts/infra/entities/message";
import { showTopicUseCase } from "@modules/accounts/useCases/topicUseCases/showTopic/showTopicUseCase";
import { createMessageUseCase } from "@modules/accounts/useCases/messageUseCases/createMessage/createMessageUseCase";
import { updateTopicUseCase } from "@modules/accounts/useCases/topicUseCases/updateTopic/updateTopicUseCase";

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server( server, {cors: {origin: "*"}});

AppDataSource.initialize().then(async () => {
    console.log('successfully connected to the database')
}).catch(error => console.log(error.message))

app.use(cors());

app.use(express.json());

app.use(morgan('dev'))

app.use(router)

app.use(appErrorHandler);

io.on("connection", (socket) => {
    console.log(`Novo socket conectado: ${socket.id}`)
    
    socket.on("join_room", async ({name, topicId}) => {
        socket.join(topicId)

        const systemMessage = new Message()
        systemMessage.content = `${name} entrou na sala.`
        
        io.to(topicId).emit("new_message", systemMessage)
    })

    socket.on("send_message", async ({content, author, topicId}) => {
        const topic = await showTopicUseCase.execute(topicId)
        
        const message = await createMessageUseCase.execute({content, author, topic})

        io.to(topicId).emit("new_message", message)
    })

    socket.on("leave_room", ({name, topicId}) => {
        socket.leave(topicId)

        const systemMessage = new Message()
        systemMessage.content = `${name} saiu da sala.`

        io.to(topicId).emit("new_message", systemMessage)
    })

    socket.on("disconnect", () => {
        console.log(`${socket.id} desconectou-se`)
    })

})

export { server };