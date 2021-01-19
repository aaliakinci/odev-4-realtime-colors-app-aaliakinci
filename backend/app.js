const path = require('path');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);


const userRouter = require('./routes/user');

//db
require('./config/db');


app.get('/users',userRouter);



io.on('connection', () => {
	console.log('connection');
	io.on('disconnection',() => {
		console.log('disconnect');
	});
});




http.listen(3000)
