import { SignupDTO } from '@dto/auth/signup.dto';
import { Request } from 'express';
import asyncErrorHandler from '@error/async-error-handler';

const signup = asyncErrorHandler(async (req: SignupDTO, res, next) => {
  console.log(1);

  // res.status(201).json({
  //   status: 'fail',
  //   data: 'user created'
  // });
});

export { signup };
