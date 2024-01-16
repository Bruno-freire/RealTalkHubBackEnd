import { Router } from "express";
import { accounts } from "./accounts.routes";
import "reflect-metadata"
// import { authenticationRoutes } from "./authentications.routes";
import { topicRoutes } from "./topicRoutes";

const router = Router()

router.use("/users", accounts)
// router.use("/auth", authenticationRoutes)
router.use("topic", topicRoutes)

export {router}