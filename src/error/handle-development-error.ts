import { ZodError } from 'zod';
import { StandardResponse } from '../custom-types/custom.response';
import { ErrorCode } from './error-codes.enum';

const handleDevelopmentError = (error: any, res: StandardResponse) => {
  if (error instanceof ZodError) {
    return res.status(400).json({
      status: 'error',
      code: ErrorCode.SCHEMA_VALIDATION_ERROR,
      errors: error.issues.map((e) => {
        return {
          message: e.message,
          context: e
        };
      })
    });
  }

  if (error instanceof Error) {
    res.status(500).json({
      status: 'error',
      code: ErrorCode.GENERIC_ERROR,
      errors: [
        {
          message: error.message || 'Something went wrong',
          context: error.stack
        }
      ]
    });
  }
};

export { handleDevelopmentError };
