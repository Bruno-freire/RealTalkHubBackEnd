import { container, injectable } from "tsyringe";
import { NextFunction, Request, Response } from "express";
import { updateMessageUseCase } from "./updateMessageUseCase";

@injectable()
class UpdateMessageController {
    
    async handle(request: Request, response: Response, next: NextFunction): Promise<Response> {
      try { 
        const { content, author, topic, messageId  } = request.body
        const message = await updateMessageUseCase.execute({content, author, topic, messageId});
        
        return response.status(200).json(message);
      } catch (err) {
        next(err)
      }
    }
    
}

export const updateMessageController = container.resolve(UpdateMessageController)