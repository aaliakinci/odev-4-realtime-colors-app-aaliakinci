import { io } from 'socket.io-client';

let socket;
export const connection = () => {
	socket = io('ws://localhost:3000', {
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
