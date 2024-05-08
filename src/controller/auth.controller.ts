import { CustomResponse } from '@custom-types/custom.response';
import { SignupDTO } from '@dto/auth/signup.dto';
import asyncErrorHandler from '@error/async-error-handler';
// import { CustomResponse } from '@types/custom.response';
import { Response } from 'express';

const signup = asyncErrorHandler(
  async (req: SignupDTO, res: Response<CustomResponse>, next) => {
    console.log(req.body);

    res.status(201).json({
      status: 'success',
      data: 'user created'
    });
  }
);

export { signup };
