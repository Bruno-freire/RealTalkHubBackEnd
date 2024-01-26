import { container, injectable } from "tsyringe";
import { NextFunction, Request, Response } from "express";
import { showUserUseCase } from "./showUserUseCase";

@injectable()
class ShowUserController {
    
    async handle(request: Request, response: Response, next: NextFunction): Promise<Response> {
      const { email } = request.body
      try {
        const user = await showUserUseCase.execute(email);
        
        return response.status(200).json(user);
      } catch (err) {
        next(err)
      }
    }
    
}

export const showUserController = container.resolve(ShowUserController)