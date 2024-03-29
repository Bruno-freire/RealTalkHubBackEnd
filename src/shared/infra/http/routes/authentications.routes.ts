// import { loginUserController } from "@modules/accounts/useCases/userUseCases/auth/login/loginUserController";
// import { Router } from "express";

// const authenticationRoutes = Router()

// authenticationRoutes.post("/login", loginUserController.handle)

// export { authenticationRoutes }

import { loginUserController } from "@modules/accounts/useCases/userUseCases/authUser/loginUserCase/loginUserController";
import { Router } from "express";


const authenticationRoutes = Router()

authenticationRoutes.post("/login", loginUserController.handle)

export { authenticationRoutes }