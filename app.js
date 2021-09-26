require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const jwt = require('express-jwt');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const ordersRouter = require('./routes/orders');
const orderbooksRouter = require('./routes/orderbooks');
const transactionsRouter = require('./routes/transactions');

const sequelize = require('./config/database');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  jwt({ secret: process.env.JWT_SECRET_KEY, algorithms: ['HS256'] }).unless({
    path: ['/', '/users/login', '/users/register'],
  })
);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);
app.use('/orderbooks', orderbooksRouter);
app.use('/transactions', transactionsRouter);

app.set('db', sequelize);

module.exports = app;
