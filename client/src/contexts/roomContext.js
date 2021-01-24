import {createContext,useState} from 'react';

const RoomContext = createContext(null);

export const RoomProvider = ({children})=>{

	const [selectedRoom, setSelectedRoom] = useState('');

	const values = {
		setSelectedRoom,
		selectedRoom,
	}

	return (
		<RoomContext.Provider value={values}>{children}</RoomContext.Provider>
	)
}
export default RoomContext;