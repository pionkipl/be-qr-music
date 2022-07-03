import * as express from "express";
import 'express-async-errors';
import './utils/db';
import {handleError} from './utils/errors';

const app = express();

app.use(handleError);

app.listen(3000, 'localhost', () => {
  console.log('listen on http://localhost:3000');
})
