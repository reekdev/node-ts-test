import { ZodError } from 'zod';
import { StandardResponse } from '../custom-types/custom.response';

const handleProductionError = (error: any, res: StandardResponse) => {
  if (error instanceof ZodError) {
    return res.status(400).json({
      status: 'error',
      errors: error.issues.map((e) => {
        return {
          code: 'ZODERROR'
        };
      })
    });
  }
};

export { handleProductionError };
