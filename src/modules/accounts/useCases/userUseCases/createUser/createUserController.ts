import { container, injectable } from "tsyringe";
import { createUserUseCase } from "./createUserUseCase";
import { NextFunction, Request, Response } from "express";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";

@injectable()
class CreateUserController {
    
    async handle(request: Request, response: Response, next: NextFunction): Promise<Response> {
      const { email, name, password } = request.body as ICreateUserDTO
      try { 
        const user = await createUserUseCase.execute({email, name, password});
        
        return response.status(200).json(user);
      } catch (err) {
        next(err)
      }
    }
    
}

export const createUserController = container.resolve(CreateUserController)