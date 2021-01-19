import {useState} from 'react';

function Form({type}) {
 const [username, setUsername] = useState({})
 const [password, setPassword] = useState({})

const handleSubmit = () => {

}


 const handleChange = (e) => {
	const name = e.target.name;
	const value = e.target.value;
	if(name==='username')
	setUsername({username:value});
	if(name==='password')
	setPassword({password:value});
 }
 
	return (
		<form className="w-100 p-4 border shadow">
			<div className="form-group">
				<label htmlFor="username">Kullanıcı adınız</label>
				<input name="username" className="form-control" onChange={handleChange}/>
			</div>
			<div className="form-group">
				<label htmlFor="password" className="form-control-label">
					Şifreniz
				</label>
				<input name="password" type="password" className="form-control" onChange={handleChange}/>
			</div>
			<button type="submit" className="btn btn-block bg-dark text-white my-2">{type==='login'?'Giriş':'Kayıt Ol'}</button> 
		</form>
	);
}

export default Form;
