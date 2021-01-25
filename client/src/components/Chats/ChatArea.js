import { useContext, useRef, useEffect } from 'react';
import styles from './styles.module.css';
import ChatContext from '../../contexts/chatContext';
import ChatItem from './ChatItem';
import ScrollableFeed from 'react-scrollable-feed';
import ThemeContext from '../../contexts/themeContext';
import RoomContext from '../../contexts/roomContext';
import CookieContext from '../../contexts/cookieContext';
import {listMessages,recivedMessage} from '../../socketService';
function ChatArea() {
	const { messages,setMessages } = useContext(ChatContext);
	const { theme } = useContext(ThemeContext);
	const { selectedRoom } = useContext(RoomContext);
	const { userCookie } = useContext(CookieContext);
	const chatListRef = useRef(null);
	useEffect(() => {
		chatListRef.current.scrollIntoView({ behavior: 'smooth' });
	}, [messages]);
	useEffect(() => {

		listMessages((data)=>setMessages(()=>[...data]))

		recivedMessage((data)=>setMessages((oldMessages)=>[...oldMessages,{data}]));
		
	}, [setMessages,selectedRoom])
 
	return (
		<div
			className={
				theme === 'light'
					? `px-2 pt-2 ${styles.chatbox} bg-white`
					: `px-2 pt-2 ${styles.chatbox} bg-dark`
			}
			ref={chatListRef}
		>
			{selectedRoom ? (
				<div
					className={
						theme === 'light'
							? `py-1 text-center mb-2 rounded-pill h4 text-dark ${styles.chatAreaHeaderLight}`
							: `py-1 text-center mb-2 rounded-pill h4 text-white bg-secondary`
					}
				>
					{selectedRoom.data.map((user,i) => (
						<div key={i}>{user === userCookie.user.username ? '' : user}</div>
					))}
				</div>
			) : (
				<div className={theme === 'light'
				? `py-1 text-center mb-2 rounded-pill text-dark h4 ${styles.chatAreaHeaderLight}`
				: `py-1 text-center mb-2 rounded-pill text-white h4 bg-secondary`
		}>Sohbet Seçiniz..</div>
			)}
			<ScrollableFeed forceScroll={true} styles={{ maxHeight: '510' }}>
				{messages?.map((message,i) => (
					<ChatItem
						key={i}
						user={message.data.user}
						message={message.data.message}
						time={message.data.messageTime}
					/>
				))}
			</ScrollableFeed>
		</div>
	);
}

export default ChatArea;
