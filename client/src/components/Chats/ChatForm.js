import { useState, useContext, useEffect, memo } from 'react';
import ChatContext from '../../contexts/chatContext';
import CookieContext from '../../contexts/cookieContext';

function ChatForm() {
	const [inputValue, setInputValue] = useState('');
	const [messageUser, setMessageUser] = useState({});
	const { setMessages, messages } = useContext(ChatContext);
	const { callCookie } = useContext(CookieContext);

	useEffect(() => {
		const cookie = callCookie('realtimecolor');
		if(cookie===undefined)
		return false
		setMessageUser(cookie.user);
	}, [callCookie]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setInputValue('');
		setMessages([...messages, { user: messageUser, message: inputValue }]);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="form-group" style={{ position: 'relative' }}>
				<input
					type="text"
					name="message"
					className="form-control"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
			</div>
		</form>
	);
}

export default memo(ChatForm);
