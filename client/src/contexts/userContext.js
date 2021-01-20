import { createContext } from 'react';
import axios from 'axios';
const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
	const loginUser = (username, password) => {
		const url = `${process.env.REACT_APP_BACKEND_URL}/users/loginUser`;
		axios
			.post(url, { username: username, password: password })
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const registerUser = (username, password,setUsername,setPassword) => {
		const url = `${process.env.REACT_APP_BACKEND_URL}/users/register`;
		console.log(url)
		axios
			.post(url, { username: username, password: password })
			.then((response) => {
				if(response.status===200)
				setUsername(username);
				setPassword(password);
				window.location.href=`${process.env.REACT_APP_CLIENT_URL}/login`;

			})
			.catch((error) => {
				console.log(error);
			});
	};
	const values = {
		loginUser,
		registerUser,
	};

	return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContext;
