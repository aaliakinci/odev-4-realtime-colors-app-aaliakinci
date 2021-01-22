// import { useContext,useEffect } from 'react';
import ChatArea from '../Chats/ChatArea';
import ChatForm from '../Chats/ChatForm';

function AllChat() {
	return (
		<>
			<div className="row d-flex justify-content-center w-100">
				<div className="col-10">
					<ChatArea />
				</div>
				<div className="col-10 p-0">
						<ChatForm />
				</div>
			</div>
		</>
	);
}

export default AllChat;
