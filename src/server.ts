import path from 'path';
import fs from 'fs';

import dotenv from 'dotenv';

dotenv.config({
  path: path.resolve(__dirname, '..', `.env.${process.env.NODE_ENV}`),
});

import express from 'express';

console.log(
  'env file exists: ',
  fs.existsSync(path.resolve(__dirname, '..', `.env.${process.env.NODE_ENV}`))
);

fs.readdir(path.resolve(__dirname, '..'), (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }
  // Listing all files using forEach
  files.forEach((file) => {
    console.log(file);
  });
});

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    data: `Working ${Date.now()}`,
  });
});

console.log('PORT is: ', process.env.PORT);

app.listen(process.env.PORT, () =>
  console.log(`server started on port: ${process.env.PORT}`)
);
