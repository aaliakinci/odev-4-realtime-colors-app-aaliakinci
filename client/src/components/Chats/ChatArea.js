import { useContext, useRef, useEffect } from 'react';
import styles from './styles.module.css';
import ChatContext from '../../contexts/chatContext';
import ChatItem from './ChatItem';
import ScrollableFeed from 'react-scrollable-feed';
import ThemeContext from '../../contexts/themeContext';
function ChatArea() {
	const { messages } = useContext(ChatContext);
	const { theme } = useContext(ThemeContext);
	const chatListRef = useRef(null);
	useEffect(() => {
		chatListRef.current.scrollIntoView({ behavior: 'smooth' });
	}, [messages]);
	return (
		<div className={theme==="light"?`px-2 py-4 ${styles.chatbox} bg-white`:`px-2 py-4 ${styles.chatbox} bg-dark`} ref={chatListRef}>
			<ScrollableFeed forceScroll={true} styles={{maxHeight:'510'}}>
				{messages?.map((message, i) => (
					<ChatItem
						key={i}
						user={message.user}
						message={message.message}
						time={message.messageTime}
					/>
				))}
			</ScrollableFeed>
		</div>

		// <div className={styles.chatarea} ref={chatListRef}>
		// 	<ScrollableFeed forceScroll={true} className="h-100 w-100">
		// 		{messages?.map((message, i) => (
		// 			<ChatItem
		// 				key={i}
		// 				user={message.user}
		// 				message={message.message}
		// 				time={message.messageTime}
		// 			/>
		// 		))}
		// 	</ScrollableFeed>
		// </div>
	);
}

export default ChatArea;
