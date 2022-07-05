import * as express from "express";
import * as cors from 'cors';
import 'express-async-errors';
import { historyRouter } from "./routers/history";
import './utils/db';
import {handleError} from './utils/errors';

const app = express();

app.use(cors({
  origin: process.env.ORIGIN
}))
app.use(handleError);
app.use(express.json());

app.use('/api', historyRouter);

app.listen(3000, 'localhost', () => {
  console.log('listen on http://localhost:3000');
})
