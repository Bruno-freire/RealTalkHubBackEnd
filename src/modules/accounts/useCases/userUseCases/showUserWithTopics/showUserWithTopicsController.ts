import { NextFunction, Request, Response } from "express";

import { container, injectable } from "tsyringe";
import { showUserWithTopicsUseCase } from "./showUserWithTopicsUseCase";

@injectable()
class ShowUserWithTopicsController {
    
    async handle(request: Request, response: Response, next: NextFunction): Promise<Response> {
        const { email } = request.body
        try {
          const users = await showUserWithTopicsUseCase.execute(email);

          return response.status(200).json(users);
        } catch (err) {
          next(err)
        }
      }
    
}

export const showUserWithTopicsController = container.resolve(ShowUserWithTopicsController)