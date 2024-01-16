import { createUserController } from "@modules/accounts/useCases/userUseCases/createUser/createUserController";
import { showUserController } from "@modules/accounts/useCases/userUseCases/showUsers/showUserController";
import { Router } from "express";

const accounts = Router()

accounts.get("/", showUserController.handle)
accounts.post("/", createUserController.handle)

export { accounts }