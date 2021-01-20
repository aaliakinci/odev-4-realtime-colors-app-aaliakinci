import { useState, useContext } from 'react';
import UserContext from '../../contexts/userContext';
function Form({ type }) {
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();
	const { loginUser, registerUser } = useContext(UserContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (type === 'login') loginUser(username, password);
		if (type === 'register') registerUser(username, password,setUsername,setPassword);
	};
	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		if (name === 'username') setUsername(value);
		if (name === 'password') setPassword(value);
	};

	return (
		<form className="w-100 p-4 border shadow" onSubmit={handleSubmit}>
			<div className="form-group">
				<label htmlFor="username">Kullanıcı adınız</label>
				<input name="username" className="form-control" onChange={handleChange} />
			</div>
			<div className="form-group">
				<label htmlFor="password" className="form-control-label">
					Şifreniz
				</label>
				<input name="password" type="password" className="form-control" onChange={handleChange} />
			</div>
			<button type="submit" className="btn btn-block bg-dark text-white my-2">
				{type === 'login' ? 'Giriş' : 'Kayıt Ol'}
			</button>
		</form>
	);
}

export default Form;
