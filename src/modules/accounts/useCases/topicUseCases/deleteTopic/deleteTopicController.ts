import { container, injectable } from "tsyringe";
import { NextFunction, Request, Response } from "express";
import { deleteTopicUseCase } from "./deleteTopicUseCase";

@injectable()
class DeleteTopicController {
    
    async handle(request: Request, response: Response, next: NextFunction): Promise<Response> {
      try { 
        const { id } = request.params
        const topic = await deleteTopicUseCase.execute(id);
        
        return response.status(200).json(topic);
      } catch (err) {
        next(err)
      }
    }
    
}

export const deleteTopicController = container.resolve(DeleteTopicController)