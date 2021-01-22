import { useState, useContext, useEffect, memo } from 'react';
import ChatContext from '../../contexts/chatContext';
import CookieContext from '../../contexts/cookieContext';
import ThemeContext from '../../contexts/themeContext';

function ChatForm() {
	const [inputValue, setInputValue] = useState('');
	const [messageUser, setMessageUser] = useState({});
	const { setMessages, messages } = useContext(ChatContext);
	const { theme } = useContext(ThemeContext);
	const { callCookie } = useContext(CookieContext);

	useEffect(() => {
		const cookie = callCookie('realtimecolor');
		if (cookie === undefined) return false;
		setMessageUser(cookie.user);
	}, [callCookie]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setInputValue('');
		const time = Date.now();
		setMessages([...messages, { user: messageUser, message: inputValue, messageTime: time }]);
	};

	return (
		<form onSubmit={handleSubmit} className={theme==="light"?'bg-light':'bg-dark'}>
			<div className="input-group">
				<input
					type="text"
					placeholder="Bir mesaj yazın"
					value={inputValue}
					onChange={(e)=>setInputValue(e.target.value)}
					className={theme==="light"?'form-control rounded-0 border-0 py-4 bg-light':'form-control rounded-0   py-4 bg-dark border border-danger border-bottom-0 border-left-0'}
				/>
				<div className="input-group-append">
					<button type="submit" className="btn btn-link">
						{' '}
						<i className="fa fa-paper-plane"></i>
					</button>
				</div>
			</div>
		</form>

		/* <form onSubmit={handleSubmit}>
			<div className="form-group" style={{ position: 'relative' }}>
				<input
					type="text"
					name="message"
					className="form-control"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
			</div>
		</form> */
	);
}

export default ChatForm;
