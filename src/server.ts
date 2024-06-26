import express from 'express';
import { env } from './config/checkEnvironmentVars';
import asyncErrorHandler from './error/async-error-handler';
import AuthRouter from './routes/auth.route';
import globalErrorHandler from './error/error.middleware';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get(`/${env.API_VERSION}/healthcheck`, (req, res) => {
  res.status(200).json({
    success: true,
    data: `Working as of ${Date.now()}`
  });
});

app.get('/heavy-task-api', (req, res) => {
  let total = 0;
  for (let i = 0; i < 50_000_000_00; ++i) {
    total += i;
  }

  res.send(`total is ${total}`);
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
    `server started on port: ${env.PORT} with api version: ${env.API_VERSION}\nProcess ID: ${process.pid}`
  );
});
