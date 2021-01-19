import React from 'react'
import Form from '../toolbox/Form'
import {Link} from 'react-router-dom'
function Register() {
	return (
		<div className="row d-flex align-content-center my-4">
			<div className="col-12  my-4">
				<p className="lead text-center w-25 border border-danger border-top-0 border-right-0 border-left-0 mx-auto py-2 font-weight-bold"> Kayıt Ol </p>
			</div>
			<div className="col-12 col-md-4 col-lg-3 d-flex justify-content-center mx-auto">
				<Form type='register'/>
			</div>
			<div className="col-12 my-3">
				<p className="lead text-center">Zaten üye misiniz ? Giriş yapmak için  <Link to="/login">tıklayınız</Link> </p>
			</div>
		</div>
		
	)
}

export default Register
