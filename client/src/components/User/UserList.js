import { useContext } from 'react';
import avatar from './avatar.png';
import UserContext from '../../contexts/userContext';
import ThemeContext from '../../contexts/themeContext';
import styles from './styles.module.css';
function UserList() {
	const { users, setSelectedUser, selectedUser } = useContext(UserContext);
	const { theme } = useContext(ThemeContext);
	return (
		<div className={`${theme==="light"?styles.messagesbox:`${styles.messagesbox} bg-dark`}`}>
			{users.map((user) => (
				<div className="list-group rounded-0" onClick={() => setSelectedUser(user)} key={user._id}>
					<div
						className={
							theme === 'light'
								? `list-group-item list-group-item-action rounded-0 bg-light ${
									selectedUser === user ? 'border border-danger border-top-0 border-left-0 border-right-0' : ''
								}`
								: `list-group-item list-group-item-action rounded-0 bg-dark ${
										selectedUser === user ? 'border border-danger border-top-0 border-left-0 border-right-0' : ''
								  }`
						}
					>
						<div className="media">
							<img src={avatar} alt="user" width="50" className="rounded-circle" />
							<div className="media-body ml-4">
								<div className="d-flex align-items-center justify-content-between mb-1">
									<h6 className="mb-0">
										{user.name} {user.surname}
									</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default UserList;
