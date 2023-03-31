import cors from 'cors';
import express, { urlencoded } from 'express';
import morgan from 'morgan';
import { userRouter } from './infrastructure/router/user.router';
import dbInit from './infrastructure/db/mongo';

const app = express();

dbInit()
  .then(() => {
    console.log('Connected to database 👍');
  })
  .catch((err) => {
    console.log(`Server internal error 😥: ${err}`);
  });

app.use(morgan('dev'));
app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(express.json());
app.use(userRouter);

export default app;
