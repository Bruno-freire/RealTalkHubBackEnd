"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appErrorHandler = void 0;
var _AppError = require("../../../errors/AppError");
var _zod = require("zod");
const appErrorHandler = (err, request, response, next) => {
  if (err instanceof _AppError.AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
      error: err.error,
      code: err.code
    });
  }
  if (err instanceof _zod.ZodError) {
    const validationErrors = [];
    err.errors.forEach(error => {
      if (error.path && error.message === 'Required') {
        const fieldName = error.path[error.path.length - 1];
        validationErrors.push(`Field '${fieldName}' is required.`);
      }
    });
    if (validationErrors.length > 0) {
      return response.status(400).json({
        status: "Validation Error",
        errors: validationErrors
      });
    }
    return response.status(400).json({
      status: "Validation Error",
      errors: err.errors.map(error => error.message)
    });
  }
  return response.status(500).json({
    status: "Error",
    Message: `Internal server error - ${err.message}`
  });
};
exports.appErrorHandler = appErrorHandler;