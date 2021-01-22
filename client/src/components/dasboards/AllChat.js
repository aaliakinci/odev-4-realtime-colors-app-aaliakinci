import { useContext } from 'react';
import ChatArea from '../Chats/ChatArea';
import UserList from '../User/UserList';
import ChatForm from '../Chats/ChatForm';
import styles from '../Chats/styles.module.css'
import ThemeContext from '../../contexts/themeContext';

function AllChat() {
	const { theme } = useContext(ThemeContext);

	return (
		<div className="container py-5 px-4">
			<div className={`row ${styles.roundedlg} overflow-hidden shadow`}>
				<div className="col-5 px-0">
						<div className={theme==="light"?'px-4 py-2 bg-light':'px-3 py-2 bg-dark'}>
							<p className="h5 mb-0 py-1">Kullanıcılar</p>
						</div>
							<UserList />
				</div>
				<div className="col-7 px-0 ">
						<ChatArea />
						<ChatForm/>
				</div>
			</div>
		</div>

		// {/* <div className="row d-flex justify-content-center w-100">
		// 	<div className="col-10">
		// 		<ChatArea />
		// 	</div>
		// 	<div className="col-10 p-0">
		// 			<ChatForm />
		// 	</div>
		// </div> */}
	);
}

export default AllChat;
