import {createContext,useState} from 'react';
const ChatContext = createContext(null);

export const ChatProvider = ({children}) =>{
	 const [messages, setMessages] = useState([])
	 
	 
 

	 const values={
		 setMessages,
		 messages,
	 }
 
	return(
		<ChatContext.Provider value={values}>{children}</ChatContext.Provider>
	)
}
export default ChatContext;
