import { container, injectable } from "tsyringe";
import { NextFunction, Request, Response } from "express";
import { getMessageByTopicUseCase } from "./getMessagesByTopicController";

@injectable()
class GetMessageByTopicController {
    
    async handle(request: Request, response: Response, next: NextFunction): Promise<Response> {
      try { 
        const { id  } = request.params
        const messages = await getMessageByTopicUseCase.execute(id);
        
        return response.status(200).json(messages);
      } catch (err) {
        next(err)
      }
    }
    
}

export const getMessageByTopicController = container.resolve(GetMessageByTopicController)