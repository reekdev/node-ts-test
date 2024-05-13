import { StandardResponse } from '@custom-types/custom.response';
import { ZodError } from 'zod';

const handleDevelopmentError = (error: any, res: StandardResponse) => {
  if (error instanceof ZodError) {
    return res.status(400).json({
      status: 'error',
      errors: error.issues
    });
  }
};

export { handleDevelopmentError };
