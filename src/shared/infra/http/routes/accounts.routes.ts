import { createUserController } from "@modules/accounts/useCases/userUseCases/createUser/createUserController";
import { showUsersController } from "@modules/accounts/useCases/userUseCases/showUsers/showUserController";
import { Router } from "express";

const accounts = Router()

accounts.get("/", showUsersController.handle)
accounts.post("/", createUserController.handle)

export { accounts }