import { useState, useContext, useEffect } from 'react';
import ChatContext from '../../contexts/chatContext';
import CookieContext from '../../contexts/cookieContext';
import ThemeContext from '../../contexts/themeContext';
import RoomContext from '../../contexts/roomContext';
import { sendMessages } from '../../socketService';
function ChatForm() {
	const [inputValue, setInputValue] = useState('');
	const [messageUser, setMessageUser] = useState({});
	const { setMessages, messages } = useContext(ChatContext);
	const { theme } = useContext(ThemeContext);
	const { callCookie } = useContext(CookieContext);
	const { selectedRoom } = useContext(RoomContext);
	useEffect(() => {
		const cookie = callCookie('realtimecolor');
		if (cookie === undefined) return false;
		setMessageUser(cookie.user);
	}, [callCookie]);

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const time = Date.now();
		sendMessages({
			user: messageUser,
			message: inputValue,
			messageTime: time,
			roomName: selectedRoom.roomName,
		});
		setInputValue('');
		setMessages([
			...messages,
			{
				data: {
					user: messageUser,
					message: inputValue,
					messageTime: time,
					roomName: selectedRoom.roomName,
				},
			},
		]);
	};

	const hasRoom = () => {
		return (
			<input
				type="text"
				placeholder="Bir mesaj yazın"
				value={inputValue}
				onChange={handleChange}
				className={
					theme === 'light'
						? 'form-control rounded-0 border-0 py-4 bg-light'
						: 'form-control rounded-0   py-4 bg-dark border border-danger border-bottom-0 border-left-0'
				}
			/>
		);
	};
	const hasntRoom = () => {
		return (
			<input
				type="text"
				placeholder="Mesaj göndermek için bir sohbet seçiniz..."
				disabled
				value={inputValue}
				className={
					theme === 'light'
						? 'form-control rounded-0 border-0 py-4 bg-light'
						: 'form-control rounded-0   py-4 bg-dark border border-danger border-bottom-0 border-left-0'
				}
			/>
		);
	};

	return (
		<form onSubmit={handleSubmit} className={theme === 'light' ? 'bg-light' : 'bg-dark'}>
			<div className="input-group">
				{selectedRoom ? hasRoom() : hasntRoom()}
				<div className="input-group-append">
					<button type="submit" className="btn btn-link">
						{' '}
						<i className="fa fa-paper-plane"></i>
					</button>
				</div>
			</div>
		</form>
	);
}

export default ChatForm;
