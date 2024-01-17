import { NextFunction, Request, Response } from "express";
import { AppError } from "@shared/errors/AppError";
import { ZodError } from "zod"

export const appErrorHandler = (
  err: Error | AppError | ZodError,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
      error: err.error,
      code: err.code,
    });
  }
  if (err instanceof ZodError) {
    const validationErrors: string[] = [];

    err.errors.forEach((error) => {
      if (error.path && error.message === 'Required') {
        const fieldName = error.path[error.path.length - 1];
        validationErrors.push(`Field '${fieldName}' is required.`);
      }
    });

    if (validationErrors.length > 0) {
      return response.status(400).json({
        status: "Validation Error",
        errors: validationErrors,
      });
    }
    
    return response.status(400).json({
      status: "Validation Error",
      errors: err.errors.map((error) => error.message),
    });
  }
  return response.status(500).json({
    status: "Error",
    Message: `Internal server error - ${err.message}`,
  });
};
