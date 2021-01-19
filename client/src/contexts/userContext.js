import {createContext} from 'react';


const UserContext = createContext(null);

export const UserProvider = ({children}) => {

	const loginUser = (username,password) => {
		
	}


	return (
		<UserContext.Provider value={values}>{children}</UserContext.Provider>
	)
}

export default UserContext; 