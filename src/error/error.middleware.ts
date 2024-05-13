import { StandardResponse } from '@custom-types/custom.response';
import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { handleDevelopmentError } from './handle-development-error';
import { handleProductionError } from './handle-production-error';

const globalErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res: StandardResponse,
  next
) => {
  switch (process.env.NODE_ENV) {
    case 'development':
      handleDevelopmentError(err, res);
      break;
    case 'production':
      handleProductionError(err, res);
      break;
  }

  // if (err instanceof ZodError) {
  //   res.status(400).json({
  //     status: 'error',
  //     errors: err.issues.map((e) => {
  //       return {
  //         errorCode: 'ZODERROR',
  //         ...e
  //       };
  //     })
  //   });
  // }
};

export default globalErrorHandler;
