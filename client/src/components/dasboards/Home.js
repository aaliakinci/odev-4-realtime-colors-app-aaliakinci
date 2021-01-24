import { useEffect, useContext } from 'react';
import CookieContext from '../../contexts/cookieContext';
import UserContext from '../../contexts/userContext';
import { ToastContainer, toast } from 'react-toastify';
import Loading from '../Loading/Loading';
import AllChat from './AllChat';
import { connection } from '../../socketService';

function Home() {
	const { getCookie } = useContext(CookieContext);
	const { users} = useContext(UserContext);
	const result = getCookie('realtimecolor');

	useEffect(() => {
		if (result === 0) {
			toast.error('🦄 Lütfen Giriş Yapınız!', {
				position: 'top-center',
				autoClose: 5000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
			setTimeout(() => {
				window.location.href = `${process.env.REACT_APP_CLIENT_URL}/login`;
			}, 1000);
		}
	}, [getCookie,result]);
	useEffect(() => {
		connection();
	 
	}, []);
	const hasUser = () => {
		return (
			<div className="row">
				<div className="col-md-12 d-flex justify-content-lg-center">
					<AllChat/>
				</div>
			</div>
		);
	};
	const hasntUser = () => {
		return <Loading />;
	};
 
	return (
		<>
			<ToastContainer
				position="top-center"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			{
			users.length > 0 && result===1 ? hasUser() : hasntUser()
			}
		</>
	);
}

export default Home;
