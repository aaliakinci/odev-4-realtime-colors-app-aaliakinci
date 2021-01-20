const path = require('path');
const express = require('express')
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const cors = require('cors');
http.listen(3000);	

const userRouter = require('./routes/user');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));



//db
require('./config/db');

app.use(cors());
app.use('/users',userRouter);



io.on('connection', () => {
	console.log('connection');
	io.on('disconnection',() => {
		console.log('disconnect');
	});
});

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




