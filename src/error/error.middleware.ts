import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  // if (err instanceof Error) {
  //   console.group();
  //   console.log('THE ERROR IS: ', err.name);
  //   console.groupEnd();

  //   res.status(500).json({
  //     status: 'error',
  //     errors: [{ message: err.message }],
  //   });
  // }

  if (err instanceof ZodError) {
    res.status(400).json({
      status: 'error',
      errors: err.issues,
    });
  }
};

export default globalErrorHandler;
