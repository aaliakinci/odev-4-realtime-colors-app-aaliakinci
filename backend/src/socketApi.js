const socketio = require('socket.io');


//lib
const Room = require('./lib/Room');
const Messages = require('./lib/Messages')

const io = socketio();
const socketApi = {
	io
};
io.on('connection',socket => {
	socket.on('get-rooms',username=>{
		Room.list(rooms=>{
	 
			let result = []
			rooms.map(item=>{
			 const contains=item.data.map(user=>{
					if(user===username)
					{
					 return 1;
					}
					return 0;
			 })
			 
			 if(contains.includes(1))
			 result.push(item)
		 })
		 socket.emit('list-rooms',result);
	 })
	}) 
	
	socket.on("new-Bg", bg => {
    socket.broadcast.emit("receive-Bg", bg);
  });

	socket.on('new-Message',data=>{
		console.log(data);
		Messages.upsert(data);
		socket.broadcast.emit('recived-Message',data);
	})

	socket.on('get-Messages',roomName=>{
		Messages.list(roomName,messages=>{
			socket.emit('list-Messages',messages);
		});
	})



	socket.on('new-Room',data=>{
		let roomName=""
		 data.map(item=>{
			  roomName+=item.toString()+"-"
		 });
		 Room.list(rooms=>{
			 if(rooms.length>0)
				{
					rooms.map(item=>{
						const splitedRoomName = roomName.split("-");
						reverseRoomName=`${splitedRoomName[1]}-${splitedRoomName[0]}-`;
						if(item.roomName!==roomName	&& item.roomName!==reverseRoomName)
						{
							Room.upsert(roomName,data)
						}
						else{	 
							 console.log('var bundan knk');
						}
					})
				}
			else{
				Room.upsert(roomName,data)
			}	
			 
		 })
	})
});
module.exports = socketApi;