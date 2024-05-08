import { Request } from 'express';
import signupSchema from 'src/schema/auth/signup.schema';
import z from 'zod';

export interface SignupDTO extends Request {
  body: z.infer<typeof signupSchema>;
}
