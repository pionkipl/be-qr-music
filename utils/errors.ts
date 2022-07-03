import {NextFunction, Request, Response} from "express";

export class ValidationError extends Error {}

export const handleError = (err: Error, req: Request, res: Response, next: NextFunction): void => {
  res
    .status(err instanceof ValidationError ? 400 : 500)
    .send({
      success: false,
      message: err.message
    })
}
