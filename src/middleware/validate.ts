import { AnyZodObject } from 'zod';
import { Request, Response, NextFunction } from 'express';

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

export default validate;
