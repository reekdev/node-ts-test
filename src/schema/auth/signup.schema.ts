import { z } from 'zod';

const signupSchema = z
  .object({
    email: z
      .string({
        required_error: 'Email is required',
        invalid_type_error: 'Email must be a string'
      })
      .email(),
    password: z
      .string({
        required_error: 'Password is required'
      })
      .min(8, { message: 'Password must be at least 8 characters long' })
      .max(32, { message: 'Password must be no more than 32 characters long' })
      .regex(/[0-9]/, { message: 'Password must contain at least one number' })
      .regex(/[a-z]/, {
        message: 'Password must contain at least one lowercase letter'
      })
      .regex(/[A-Z]/, {
        message: 'Password must contain at least one uppercase letter'
      })
      .regex(/[\!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\;\:\'\"\,\<\.\>\/\?\|\\]/, {
        message: 'Password must contain at least one special character'
      })
  })
  .strict();

export default signupSchema;
