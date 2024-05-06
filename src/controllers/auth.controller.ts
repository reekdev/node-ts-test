import z from 'zod';
import signupSchema from '../dto/auth/signup.dto';
import asyncHandler from '../error/async-handler';
import { CustomResponse } from '../types/custom.response';
import { Request, Response } from 'express';

interface SignupRequestDTO extends Express.Request {
  body: z.infer<typeof signupSchema>;
}

const signup = asyncHandler(async (req: SignupRequestDTO, res) => {
  console.log(req.body.email);

  res.setHeader('Cache-Control', 'public, max-age=3600').status(201).json({
    status: 'success',
    data: 'User created'
  });

  // ---
});

export { signup };
