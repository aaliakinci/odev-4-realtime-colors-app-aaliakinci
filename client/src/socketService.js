import { io } from 'socket.io-client';

export const connection = () => {
	const socket = io('ws://localhost:3000', {
		transports: ['websocket'],
	});
	console.log('Connecting...');
	socket.on('connect', () => console.log('Connected!'));
};
