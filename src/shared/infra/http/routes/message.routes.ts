import { createMessageController } from "@modules/accounts/useCases/messageUseCases/createMessage/createMessageController";
import { getMessageByTopicController } from "@modules/accounts/useCases/messageUseCases/getMessagesByTopic/getMessageByTopicUseCase";
import { Router } from "express";


export const messageRoutes = Router()

messageRoutes.post("/", createMessageController.handle)
messageRoutes.get("/topic/:id/messages", getMessageByTopicController.handle)