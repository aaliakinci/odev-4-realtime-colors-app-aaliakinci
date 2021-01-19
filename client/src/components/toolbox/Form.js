import React from 'react';

function Form({type}) {


	return (
		<form className="w-100 p-4 border shadow">
			<div className="form-group">
				<label htmlFor="username">Kullanıcı adınız</label>
				<input name="username" className="form-control"/>
			</div>
			<div className="form-group">
				<label htmlFor="password" className="form-control-label">
					Şifreniz
				</label>
				<input name="password" type="password" className="form-control"/>
			</div>
			<button type="submit" className="btn btn-block bg-dark text-white my-2">{type=='login'?'Giriş':'Kayıt Ol'}</button> 
		</form>
	);
}

export default Form;
