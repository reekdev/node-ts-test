import { env } from './config/checkEnvironmentVars';

import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    data: `Working ${Date.now()}`,
  });
});

console.log('PORT is:', env.PORT);
console.log('current API version is:', env.API_VERSION);

app.listen(env.PORT, () => console.log(`server started on port: ${env.PORT}`));
