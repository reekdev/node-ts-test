import { ErrorRequestHandler } from 'express';
import { StandardResponse } from '../custom-types/custom.response';
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
};

export default globalErrorHandler;
