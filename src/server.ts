import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    data: 'working',
    ip1: req.ip,
    ip2: req.socket.remoteAddress,
  });
});

app.listen(4500, () => {
  console.log('server started on port 4500');
  console.log('environment is: ', process.env.NODE_ENV);
});
