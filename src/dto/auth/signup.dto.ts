import z from 'zod';
import signupSchema from '../../schema/auth/signup.schema';

export type SignupDTO = z.infer<typeof signupSchema>;
