import { Router } from "express";
import { accounts } from "./accounts.routes";
import "reflect-metadata"
import { authenticationRoutes } from "./authentications.routes";
import { topicRoutes } from "./topicRoutes";
import { messageRoutes } from "./message.routes";

const router = Router()

router.use("/users", accounts)
router.use("/auth", authenticationRoutes)
router.use("/topic", topicRoutes)
router.use("/message", messageRoutes)

export { router }