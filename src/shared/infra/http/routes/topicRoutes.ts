import { createTopicController } from "@modules/accounts/useCases/topicUseCases/createTopic/createTopicController";
import { deleteTopicController } from "@modules/accounts/useCases/topicUseCases/deleteTopic/deleteTopicController";
import { showTopicController } from "@modules/accounts/useCases/topicUseCases/showTopic/showTopicController";
import { showTopicsController } from "@modules/accounts/useCases/topicUseCases/showTopics/showTopicsController";
import { Router } from "express";

export const topicRoutes = Router()

topicRoutes.get("/", showTopicsController.handle)
topicRoutes.post("/", createTopicController.handle)

topicRoutes.get("/:id", showTopicController.handle)
topicRoutes.delete("/:id", deleteTopicController.handle)