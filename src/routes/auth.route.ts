import { Router } from 'express';
import { validate } from '../middleware/validate.resource';
import signupSchema from '../schema/auth/signup.schema';
import UserController from '../controller/auth.controller';
import { blockUserAgent } from '../middleware/block-user-agent';

const AuthRouter = Router();

AuthRouter.post(
  '/signup',
  validate(signupSchema),
  blockUserAgent(),
  // (req, res, next) => {
  //   blockedUserAgentList.forEach((userAgent) => {
  //     if (req.get('User-Agent')?.startsWith(userAgent)) {
  //   return res.status(400).json({
  //     status: 'fail',
  //     data: 'user agent blocked'
  //   });
  //     }
  //   });

  //   for (let i = 0; i < blockedUserAgentList.length; ++i) {
  //     if (
  //       req.get('User-Agent')?.startsWith(blockedUserAgentList[i] as string)
  //     ) {
  //       return res.status(400).json({
  //         status: 'fail',
  //         data: 'user agent blocked'
  //       });
  //     }
  //   }
  //   next();
  // },
  UserController.signup
);

export default AuthRouter;
