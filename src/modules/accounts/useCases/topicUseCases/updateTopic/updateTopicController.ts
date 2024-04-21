import { container, injectable } from "tsyringe";
import { NextFunction, Request, Response } from "express";
import { updateTopicUseCase } from "./updateTopicUseCase";
import { Topic } from "@modules/accounts/infra/entities/topic";

@injectable()
class UpdateTopicController {
    
    async handle(request: Request, response: Response, next: NextFunction): Promise<Response> {
      try { 
        const { topic } = request.body as {topic: Topic}
        const topicUpdated = await updateTopicUseCase.execute(topic);
        
        return response.status(200).json(topicUpdated);
      } catch (err) {
        next(err)
      }
    }
    
}

export const updateTopicController = container.resolve(UpdateTopicController)