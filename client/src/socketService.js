import { io } from 'socket.io-client';

let socket;
export const connection = () => {
	socket = io(process.env.REACT_APP_BACKEND_URL, {
		transports: ['websocket'],
	});
	console.log('Connecting...');
	socket.on('connect', () => console.log('Connected!'));
};

export const subscribeToRoom = (data) => {
	if (socket) {
		socket.emit('new-Room', data);
	}
};
export const getUserRooms = (data) => {
	if (socket) {
		socket.emit('get-rooms', data);
	}
};
export const listUserRooms = (cb) => {
	if (!socket) return true;
	socket.on('list-rooms', (rooms) => {
		// console.log('rooms: ', rooms);
		cb(rooms);
	});
};
export const sendMessages = (messages) => {
	if (socket) socket.emit('new-Message', messages);
};
export const getMessages = (roomName) => {
	if (socket) socket.emit('get-Messages', roomName);
};
export const listMessages = (cb) => {
	if (socket) {
		socket.on('list-Messages', (data) => {
			cb(data);
		});
	}
};
export const recivedMessage = (cb) => {
	if (socket) {
		socket.on('recived-Message', (data) => {
			cb(data);
		});
	}
};
export const sendBg = (bg) => {
	if (socket) socket.emit("new-Bg", bg);
	
};


export const recivedBg = (cb) => {
	if (socket)
	{
		socket.on("receive-Bg", (bg) => {
			console.log(bg);
			cb(bg);
		});
	}
};
 
export const disconnectSocket = () => {
	console.log('Disconnecting...');
	if (socket) socket.disconnect();
};
