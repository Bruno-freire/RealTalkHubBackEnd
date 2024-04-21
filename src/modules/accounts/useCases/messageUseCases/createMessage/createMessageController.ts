import { container, injectable } from "tsyringe";
import { NextFunction, Request, Response } from "express";
import { createMessageUseCase } from "./createMessageUseCase";

@injectable()
class CreateMessageController {
    
    async handle(request: Request, response: Response, next: NextFunction): Promise<Response> {
      try { 
        const { content, author, topic  } = request.body
        const message = await createMessageUseCase.execute({content, author, topic});
        
        return response.status(200).json(message);
      } catch (err) {
        next(err)
      }
    }
    
}

export const createMessageController = container.resolve(CreateMessageController)