import { useEffect, useContext } from 'react';
import CookieContext from '../../contexts/cookieContext';
import { ToastContainer, toast } from 'react-toastify';
function Home() {
	const { getCookie } = useContext(CookieContext);

	useEffect(() => {
		const result = getCookie('deneme');
		if (result === 0) {
			toast.error('🦄 Lütfen Giriş Yapınız!', {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				});
			setTimeout(()=>{
				window.location.href = `${process.env.REACT_APP_CLIENT_URL}/login`;
			},1000);
		}
	}, [getCookie]);
	return <div>Home Page
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
	</div>;
}

export default Home;
