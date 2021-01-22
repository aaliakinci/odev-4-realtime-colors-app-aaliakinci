import React from 'react'
import styles from './styles.module.css'
function ChatItem({message,user}) {
	return (
		<>
		<div className={`${styles.chatItem} ${message.fromMe ? styles.right : ""}`}>
			{message}
		</div>
		<small className="text-muted text-end w-100"> -{user.name}{user.surname}</small>
		</>
	)
}

export default ChatItem
