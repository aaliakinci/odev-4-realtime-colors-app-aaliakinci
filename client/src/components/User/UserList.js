import { useContext } from 'react';
import UserContext from '../../contexts/userContext';
import ThemeContext from '../../contexts/themeContext';

function UserList() {
	const { users, setSelectedUser } = useContext(UserContext);
	const { theme } = useContext(ThemeContext);
	return (
		<ul className="list-group list-group-flush">
			<li
				className={
					theme === 'light'
						? 'list-group-item text-center border border-danger border-top-0 border-left-0 border-right-0 mb-2'
						: 'list-group-item text-center border border-danger border-top-0 border-left-0 border-right-0 bg-transparent text-danger'
				}
			>
				Kullanıcılar
			</li>
			{users.map((user) => (
				<li
					className={
						theme === 'light'
							? 'list-group-item text-center border border-danger border-top-0 border-left-0 border-right-0'
							: 'list-group-item text-center border border-danger border-top-0 border-left-0 border-right-0 bg-dark'
					}
					key={user._id}
					onClick={() => setSelectedUser(user)}
				>
					{user.name} {user.surname}
				</li>
			))}
		</ul>
	);
}

export default UserList;
