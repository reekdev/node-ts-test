import signupSchema from 'src/schema/auth/signup.schema';
import z from 'zod';

export type SignupDTO = z.infer<typeof signupSchema>;
