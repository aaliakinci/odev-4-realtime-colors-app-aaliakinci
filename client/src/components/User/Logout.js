import {useContext} from 'react';
import CookieContext from '../../contexts/cookieContext';


function Logout() {
	const {deleteCookie} = useContext(CookieContext);
	const logout = () => {
		deleteCookie('realtimecolor');
		window.location.href=`${process.env.REACT_APP_CLIENT_URL}/login`
	}
	return (
		<div className="row">
			<div className="col-12 d-flex justify-content-end">
				<i className="fa fa-sign-out fa-2x text-danger" onClick={logout}>Çıkış</i>
			</div>
		</div>
	);
}

export default Logout;
