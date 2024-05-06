import { Router } from 'express';
import { signup } from '../controllers/auth.controller';
import validate from '../middleware/validate';
import signupSchema from '../dto/auth/signup.dto';

const AuthRouter = Router();

AuthRouter.post('/signup', validate(signupSchema), signup);
AuthRouter.post(
  '/login',
  (req, res, next) => {},
  (req, res, next) => {},
  (req, res, next) => {}
);

export default AuthRouter;
