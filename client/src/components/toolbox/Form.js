import { useState, useContext } from 'react';
import CookieContext from '../../contexts/cookieContext';
import UserContext from '../../contexts/userContext';
 

function Form({ type }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [error, setError] = useState('');
	const { loginUser, registerUser } = useContext(UserContext);
	const { setCookie } = useContext(CookieContext);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (type === 'login') {
			const response = await loginUser(username, password);
			if (response.data.status === 404) {
				setError(response.data.message);
				return false;
			}
			setCookie('realtimecolor', response.data, 20);
			window.location.href=`${process.env.REACT_APP_CLIENT_URL}/`
		}
		if (type === 'register'){
			if(username==="" || password==="" || name==="" || surname==="")
			{
				setError('* ile işaretli alanlar boş bırakılamaz')
				return false
			}
			if(password.length<3)
			{
				setError('Şifre alanı en az 3 karakter olmalıdır')
				return false
			}
			const response = await registerUser(username, password,name,surname);
			if(response.data.status===414)
			{
				setError(response.data.message);
				return false
			}
			window.location.href=`${process.env.REACT_APP_CLIENT_URL}/login`
		} 
	};
	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		if (name === 'username') setUsername(value);
		if (name === 'password') setPassword(value);
		if (name === 'name') setName(value);
		if (name === 'surname') setSurname(value);
	};

	const registerForm = () => {
		return (
			<>
				 <div className="form-group">
				<label htmlFor="name" className="form-control-label">
					Adınız <span className="text-danger">*</span>
				</label>
				<input name="name" type="text" className="form-control" onChange={handleChange} />
			</div>
			<div className="form-group">
				<label htmlFor="surname" className="form-control-label">
					Soyadınız * <span className="text-danger">*</span>
				</label>
				<input name="surname" type="text" className="form-control" onChange={handleChange} />
			</div>
			</>
		
		)
	}
	return (
		<form className="w-100 p-4 border shadow" onSubmit={handleSubmit}>
			<div className="form-group">
				<label htmlFor="username">Kullanıcı adınız <span className="text-danger">*</span></label>
				<input name="username" className="form-control" onChange={handleChange} />
			</div>
			<div className="form-group">
				<label htmlFor="password" className="form-control-label">
					Şifreniz <span className="text-danger">*</span>
				</label>
				<input name="password" type="password" className="form-control" onChange={handleChange} />
			</div>
			{
				type==="register"?registerForm():""
			}
			<button type="submit" className="btn btn-block bg-dark text-white my-2">
				{type === 'login' ? 'Giriş' : 'Kayıt Ol'}
			</button>
		<small className="text-danger lead">{error}</small>
		</form>
	);
}

export default Form;
