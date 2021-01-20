import { createContext } from 'react';
import axios from 'axios';
const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
	const loginUser = (username, password) => {
		const url = `${process.env.REACT_APP_BACKEND_URL}/users/login`;
		return axios
			.post(url, { username: username, password: password })
			.then((response) => {
				return response;
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const registerUser = (username, password) => {
		const url = `${process.env.REACT_APP_BACKEND_URL}/users/register`;

	 return axios
			.post(url, { username: username, password: password })
			.then((response) => {
				return response;
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
