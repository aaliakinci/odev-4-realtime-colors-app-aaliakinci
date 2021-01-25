import { useContext,useEffect} from 'react';
import avatar from './avatar.png';
import UserContext from '../../contexts/userContext';
import ThemeContext from '../../contexts/themeContext';
import styles from './styles.module.css';
import { subscribeToRoom,connection } from '../../socketService';
import CookieContext from '../../contexts/cookieContext';
import { ToastContainer, toast } from 'react-toastify';

function UserList() {
	const { users, setSelectedUser, selectedUser } = useContext(UserContext);

	const { theme } = useContext(ThemeContext);
	const { userCookie } = useContext(CookieContext);
	useEffect(() => {
		connection();
	}, [])
	const createRoom = async (user) => {
		toast.success('🦄 Sohbetiniz oluştu sohbetlerime geçebilirsiniz!', {
			position: 'top-center',
			autoClose: 5000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
		subscribeToRoom([userCookie.user.username, user.username]);
	};

	return (
		<>
		<ToastContainer
				position="top-center"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		<div className={`${theme === 'light' ? styles.messagesbox : `${styles.messagesbox} bg-dark`}`}>
			{users.map((user) => (
				<div key={user._id}>
					{user.username === userCookie.user.username?
						""
					 : 
						<div
							className="list-group rounded-0"
							onClick={() => setSelectedUser(user)}
							
						>
							<div
								className={
									theme === 'light'
										? `list-group-item list-group-item-action rounded-0 bg-light ${
												selectedUser === user
													? 'border border-danger border-top-0 border-left-0 border-right-0'
													: ''
										  }`
										: `list-group-item list-group-item-action rounded-0 bg-dark ${
												selectedUser === user
													? 'border border-danger border-top-0 border-left-0 border-right-0'
													: ''
										  }`
								}
							 >
								<div className="media">
									<img src={avatar} alt="user" width="50" className="rounded-circle" />
									<div className="media-body ml-4">
										<div
											className={`d-flex align-items-center justify-content-between mb-1 ${
												theme === 'light' ? 'text-dark' : 'text-white'
											}`}
										>
											<h6 className="mb-0"  >
												{user.name} {user.surname} ({user.username})
											</h6>
											<button
												className={`btn btn-sm border-0 bg-transparent ${
													theme === 'light' ? 'text-dark' : 'text-white'
												}`}
												onClick={() => createRoom(user)}
											>
												Sohbet Oluştur
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					}
				</div>
			))}
		</div>
		</>
		
	);
}

export default UserList;
