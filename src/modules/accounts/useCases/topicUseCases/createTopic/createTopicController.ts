import { container, injectable } from "tsyringe";
import { NextFunction, Request, Response } from "express";
import { createTopicUseCase } from "./createTopicUseCase";
import { ICreateTopicDTO } from "@modules/accounts/dtos/ICreateTopicDTO";

@injectable()
class CreateTopicController {
    
    async handle(request: Request, response: Response, next: NextFunction): Promise<Response> {
      try { 
        const { title, content, userId  } = request.body as ICreateTopicDTO
        const topic = await createTopicUseCase.execute(title, content, userId);
        
        return response.status(200).json(topic);
      } catch (err) {
        next(err)
      }
    }
    
}

export const createTopicController = container.resolve(CreateTopicController)