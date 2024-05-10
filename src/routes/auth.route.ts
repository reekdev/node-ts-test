import { signup } from '@controller/auth.controller';
import validate from '@middleware/validate.resource';
import signupSchema from '@schema/auth/signup.schema';
import { Router } from 'express';

const AuthRouter = Router();

AuthRouter.post(
  '/signup',
  // validate(signupSchema),
  signup

  // (req, res) => {
  //   res.status(404).json({
  //     status: 'asd'
  //   });
  // }
);
AuthRouter.post(
  '/login',
  (req, res, next) => {},
  (req, res, next) => {},
  (req, res, next) => {}
);

export default AuthRouter;
