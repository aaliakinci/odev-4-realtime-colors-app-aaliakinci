import { useContext,useRef,useEffect } from 'react';
import styles from './styles.module.css';
import ChatContext from '../../contexts/chatContext';
import ChatItem from './ChatItem';
import ScrollableFeed from 'react-scrollable-feed';
function ChatArea() {
	const { messages } = useContext(ChatContext);
	const chatListRef = useRef(null);
	useEffect(() => {
		chatListRef.current.scrollIntoView({ behavior: 'smooth' });
	}, [messages]);
	return (
		 
			<div className={styles.chatarea} ref={chatListRef}>
				<ScrollableFeed forceScroll={true} className="h-100 w-100">
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
 
	);
}

export default ChatArea;
