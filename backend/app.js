const createError = require('http-errors');
const express = require('express');
const socketApi = require('./src/socketApi'); 
const session = require('express-session');

const io = socketApi.io;
const cors = require('cors')
const app = express();
const server = require('http').createServer(app) 
const cookieParser = require('cookie-parser');
const logger = require('morgan');

server.listen(3000);
io.attach(server) 

require('dotenv').config()

const userRouter = require('./routes/user');
const messageRouter = require('./routes/message');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(cookieParser());

//db
require('./config/db');

app.use(cors());
app.use('/users',userRouter);
app.use('/messages',messageRouter);



 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
		message:err.message,
		error:err
	});
});

module.exports = app;




