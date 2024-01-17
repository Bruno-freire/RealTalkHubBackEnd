import { container, injectable } from "tsyringe";
import { NextFunction, Request, Response } from "express";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { loginUserUseCase } from "./loginUserCase";

@injectable()
class LoginUserController {
    
    async handle(request: Request, response: Response, next: NextFunction): Promise<Response> {
      const { email, password } = request.body as ICreateUserDTO
      try { 
        const user = await loginUserUseCase.execute(email, password);
        
        return response.status(200).json(user);
      } catch (err) {
        next(err)
      }
    }
    
}

export const loginUserController = container.resolve(LoginUserController)