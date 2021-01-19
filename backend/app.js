const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', () => {
 console.log('connection');


io.on('disconnection',()=>{
	console.log('disconnect')
})
});
server.listen(3000);
