import { container, injectable } from "tsyringe";
import { NextFunction, Request, Response } from "express";
import { showTopicUseCase } from "./showTopicUseCase";

@injectable()
class ShowTopicController {
    
    async handle(request: Request, response: Response, next: NextFunction): Promise<Response> {
      try { 
        const { id } = request.body
        const topic = await showTopicUseCase.execute(id);
        
        return response.status(200).json(topic);
      } catch (err) {
        next(err)
      }
    }
    
}

export const showTopicController = container.resolve(ShowTopicController)