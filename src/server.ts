import 'module-alias/register';

import { env } from './config/checkEnvironmentVars';

import express from 'express';
import asyncErrorHandler from './error/async-error-handler';
import globalErrorHandler from './error/error.middleware';
import AuthRouter from './routes/auth.route';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get(`/${env.API_VERSION}/healthcheck`, (req, res) => {
  res.status(200).json({
    success: true,
    data: `Working as of ${Date.now()}`
  });
});

app.get(
  '/invalid-route',
  asyncErrorHandler(async (req, res, next) => {
    throw new Error('this is not a valid route');
  })
);

app.use(`/${env.API_VERSION}/auth`, AuthRouter);

app.use(globalErrorHandler);

app.use('*', (req, res) => {
  res.status(404).json({
    status: 'fail',
    data: `could not find ${req.baseUrl}`
  });
});

app.listen(env.PORT, () => {
  console.group('[INFO]');
  console.log(
    `server started on port: ${env.PORT} with api version: ${env.API_VERSION}`
  );
});
