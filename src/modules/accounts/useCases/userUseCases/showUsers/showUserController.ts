import { NextFunction, Request, Response } from "express";
import { showUsersUseCase } from "./showUserUseCase";
import { container, injectable } from "tsyringe";

@injectable()
class ShowUsersController {
    
    async handle(request: Request, response: Response, next: NextFunction): Promise<Response> {
        try {
          const users = await showUsersUseCase.execute();

          return response.status(200).json(users);
        } catch (err) {
          next(err)
        }
      }
    
}

export const showUsersController = container.resolve(ShowUsersController)