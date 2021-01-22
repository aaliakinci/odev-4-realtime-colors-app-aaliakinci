import { useContext,memo } from 'react';
import styles from './styles.module.css';
import ChatContext from '../../contexts/chatContext'
import ChatItem from './ChatItem'
function ChatArea() {
	const { messages } = useContext(ChatContext);

	return <div className={styles.chatarea}>
		{
		messages?.map((message,i)=>(
			<ChatItem key={i} user={message.user} message={message.message}/>
		))
	}
	</div>;
}

export default memo(ChatArea);
