import { StandardResponse } from '@custom-types/custom.response';
import { SignupRequest } from '@custom-types/request/auth/signup.request';
import asyncErrorHandler from '@error/async-error-handler';

const UserController = {
  signup: asyncErrorHandler(
    async (req: SignupRequest, res: StandardResponse, next) => {
      // console.log(req.query.gender);
      console.log(Object.hasOwn(req.query, 'gender'));

      res.status(201).json({
        status: 'success',
        data: 'user create85858d'
      });
    }
  )
};

export default UserController;
