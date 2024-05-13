import type { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

/**
 * This is a higher order function that returns another function
 * specifically, an Express middleware with the signature (req: Request, res: Response, next: NextFunction)
 *
 * This returned function is what actually gets executed when a request hits the route
 */

const validate = (schema: AnyZodObject) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      return next(error);
    }
  };
};

export { validate };
