const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const gamesRouter = require('./routes/games');
const paymentRouter = require('./routes/payment');

const app = express();

app.use(
  require('cors')({
    origin: function (origin, callback) {
      callback(null, origin);
    },
    credentials: true,
  })
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', paymentRouter);
app.use('/games', gamesRouter);

module.exports = app;
