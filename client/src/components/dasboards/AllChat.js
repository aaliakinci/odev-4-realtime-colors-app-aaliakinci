import { useContext, useEffect, useState } from 'react';
import ChatArea from '../Chats/ChatArea';
import UserList from '../User/UserList';
import ChatForm from '../Chats/ChatForm';
import styles from '../Chats/styles.module.css';
import ThemeContext from '../../contexts/themeContext';
import RoomList from '../Room/RoomList';

function AllChat() {
	const { theme } = useContext(ThemeContext);
	const [which, setWhich] = useState('users');

	return (
		<div className="container py-5 px-4">
			<div className={`row ${styles.roundedlg} overflow-hidden shadow`}>
				<div className="col-5 px-0">
					<div className={theme === 'light' ? 'px-4 py-2 bg-light' : 'px-3 py-2 bg-dark'}>
						<button
							className={
								theme === 'light'
									? 'h5 mb-0 py-1 ml-2 bg-transparent border-0 text-dark'
									: 'h5 mb-0 py-1 ml-2 bg-transparent border-0 text-white'
							}
							onClick={() => setWhich('users')}
						>
							Kullanıcılar
						</button>
						<button
							className={
								theme === 'light'
									? 'h5 mb-0 py-1 ml-2 bg-transparent border-0 text-dark'
									: 'h5 mb-0 py-1 ml-2 bg-transparent border-0 text-white'
							}
							onClick={() => setWhich('rooms')}
						>
							Sohbetlerim
						</button>
					</div>
					{which === 'users' ? <UserList /> : <RoomList />}
				</div>
				<div className="col-7 px-0 ">
					<ChatArea />
					<ChatForm />
				</div>
			</div>
		</div>
	);
}

export default AllChat;
