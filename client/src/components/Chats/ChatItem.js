import { useContext, useEffect, useState } from 'react';
import CookieContext from '../../contexts/cookieContext';
import styles from './styles.module.css';
import TimeAgo from 'react-timeago';
function ChatItem({ message, user, time }) {
	const { userCookie } = useContext(CookieContext);

	return (
		<div className="row mr-2">
			<div className={`${user._id === userCookie.user._id ? 'col-12 d-flex justify-content-end p-0' : 'col-12 d-flex justify-content-start p-0'}`}>
				<small className="lead">
					{user.name} {user.surname}
				</small>
			</div>
			<div className={`${user._id === userCookie.user._id ? 'col-12 d-flex justify-content-end p-0' : 'col-12 d-flex justify-content-start p-0'}`}>
				<div
					className={`${styles.chatItem} ${user._id === userCookie.user._id ? styles.right : ''}`}
				>
					{message}
				</div>
			</div>
			<div className={`${user._id === userCookie.user._id ? 'col-12 d-flex justify-content-end p-0' : 'col-12 d-flex justify-content-start p-0'}`}>
				<small className="text-muted">
					<TimeAgo date={time} minPeriod={'minute'} />
				</small>
			</div>
		</div>
	);
}

export default ChatItem;
