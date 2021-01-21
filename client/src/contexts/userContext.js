import { createContext,useState } from 'react';
import axios from 'axios';
const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
	const [users, setUsers] = useState([])


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

	const getAllUser = () => {
		const url = `${process.env.REACT_APP_BACKEND_URL}/users/getAll`
		axios(url).then((response)=>{
			setUsers(response.data);
		}).catch((err)=>{
			console.log(err);
		});
	}

	const values = {
		loginUser,
		registerUser,
		users,
		getAllUser,
	};

	return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContext;
