import { useEffect, useContext, useState } from 'react';
import { getUserRooms, listUserRooms, getMessages,disconnectSocket ,connection } from '../../socketService';
import avatar from '../User/avatar.png';
import ThemeContext from '../../contexts/themeContext';
import styles from '../User/styles.module.css';
import CookieContext from '../../contexts/cookieContext';
import RoomContext from '../../contexts/roomContext';
function RoomList() {
	const { userCookie } = useContext(CookieContext);
	const { theme } = useContext(ThemeContext);
	const { setSelectedRoom, selectedRoom } = useContext(RoomContext);
	const [rooms, setRooms] = useState([]);

	useEffect(() => {
		
		getUserRooms(userCookie.user.username);
		listUserRooms((rooms) => {
			setRooms((oldRooms) => [...oldRooms, ...rooms]);
		});
	return () => disconnectSocket();
	}, [userCookie.user.username, setRooms]);
	const selectRoom = async (room) => {
		setSelectedRoom(room);
		await getMessages(room.roomName);
	};
	return (
		<div className={`${theme === 'light' ? styles.messagesbox : `${styles.messagesbox} bg-dark`}`}>
			{rooms.map((room) => (
				<div className="list-group rounded-0" key={room.roomName} onClick={() => selectRoom(room)}>
					<div
						className={
							theme === 'light'
								? `list-group-item list-group-item-action rounded-0 bg-light ${
										selectedRoom === room
											? 'border border-danger border-top-0 border-left-0 border-right-0'
											: ''
								  }`
								: `list-group-item list-group-item-action rounded-0 bg-dark ${
										selectedRoom === room
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
									<h6 className="mb-0">
										{room.data.map((username) =>
											username === userCookie.user.username ? '' : username,
										)}
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

export default RoomList;
