import { container, injectable } from "tsyringe";
import { NextFunction, Request, Response } from "express";
import { showTopicsUseCase } from "./showTopicsUseCase";

@injectable()
class ShowTopicsController {
    
    async handle(request: Request, response: Response, next: NextFunction): Promise<Response> {
      try { 
        const topics = await showTopicsUseCase.execute();
        
        return response.status(200).json(topics);
      } catch (err) {
        next(err)
      }
    }
    
}

export const showTopicsController = container.resolve(ShowTopicsController)