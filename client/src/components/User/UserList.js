import { useContext } from 'react';
import UserContext from '../../contexts/userContext';

function UserList() {
	const { users } = useContext(UserContext);
	return (
		<ul className="list-group list-group-flush">
			{users.map((user) => {
				<li className="list-group-item" key={user._id}>{user.name} {user.surname}</li>;
			})}
		</ul>
	);
}

export default UserList;
