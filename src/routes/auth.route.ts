import { Router } from 'express';
import { validate } from '../middleware/validate.resource';
import signupSchema from '../schema/auth/signup.schema';
import UserController from '../controller/auth.controller';

const AuthRouter = Router();

AuthRouter.post('/signup', validate(signupSchema), UserController.signup);

export default AuthRouter;
