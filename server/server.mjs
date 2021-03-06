import express from 'express';
import logger from 'morgan';

import 'express-async-errors';

import { productsRouter } from './src/products.routes.mjs';
import { usersRouter } from './src/users.routes.mjs';
import { categoriesRouter } from './src/categories.routes.mjs';

import './src/db/connect.mjs';

export const app = express();

app.use(logger('dev'));

app.use(express.json());

app.use('/api/products', productsRouter);
app.use('/api/users', usersRouter);
app.use('/api/categories', categoriesRouter);

app.use(express.static('../client/build/'));

const port = process.env.PORT || 8080;

app.listen(port);


//console.log("Server is listening on http://localhost:8080!");


//mongodb+srv://fakestoreuser:fakestoreuser@cluster0.aqk1t.mongodb.net/fakestore?retryWrites=true&w=majority