import { showUserController } from "@modules/accounts/useCases/showUser/showUserController";
import { createUserController } from "@modules/accounts/useCases/userUseCases/createUser/createUserController";
import { showUserWithTopicsController } from "@modules/accounts/useCases/userUseCases/showUserWithTopics/showUserWithTopicsController";
import { showUsersController } from "@modules/accounts/useCases/userUseCases/showUsers/showUserController";
import { Router } from "express";

const accounts = Router()

accounts.get("/all", showUsersController.handle)
accounts.post("/user", showUserController.handle)
accounts.post("/user/topics", showUserWithTopicsController.handle)
accounts.post("/", createUserController.handle)

export { accounts }