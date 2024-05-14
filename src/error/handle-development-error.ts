import { ZodError } from 'zod';
import { StandardResponse } from '../custom-types/custom.response';

const handleDevelopmentError = (error: any, res: StandardResponse) => {
  if (error instanceof ZodError) {
    return res.status(400).json({
      status: 'error',
      errors: error.issues
    });
  }

  if (error instanceof Error) {
    res.status(500).json({
      status: 'error',
      errors: [
        {
          message: error.message
        }
      ]
    });
  }
};

export { handleDevelopmentError };
