import { useEffect, useContext } from 'react';
import CookieContext from '../../contexts/cookieContext';
import UserContext from '../../contexts/userContext';
import { ToastContainer, toast } from 'react-toastify';
import UserList from '../User/UserList';
import Loading from '../Loading/Loading';
function Home() {
	const { getCookie } = useContext(CookieContext);
	const { users, getAllUser } = useContext(UserContext);
	useEffect(() => {
		const result = getCookie('realtimecolor');
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
	}, [getCookie]);

	useEffect(() => {
		setTimeout(()=>{
			getAllUser();
		},10000)
	}, [users]);
	console.log(users);
	const hasUser = () => {
		return (
			<div className="row">
				<div className="col-md-2 p-4">
					<UserList/>
				</div>
				<div className="col-md-10">
					Chat
				</div>
			</div>
		);
	};
	const hasntUser = () => {
		return (
			<Loading/>
		)
	}

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
				users.length>0?hasUser():hasntUser()	
			}
		</>
	);
}

export default Home;
