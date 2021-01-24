import styles from './App.module.css';
import { Switch, Route } from 'react-router-dom';
import Login from './components/dasboards/Login';
import Register from './components/dasboards/Register';
import Home from './components/dasboards/Home';
import { useContext, useEffect,useState } from 'react';
import ThemeContext from './contexts/themeContext';
import ThemeChanger from './components/ThemeChanger/ThemeChanger';
import Logout from './components/User/Logout';
import CookieContext from './contexts/cookieContext';
 
 
function App() {
	const { theme } = useContext(ThemeContext);
 const {getCookie} = useContext(CookieContext);
 const [result, setResult] = useState(0)
 useEffect(() => {
	const result =  getCookie('realtimecolor');
	setResult(result)
 }, [getCookie])
	return (
		<div className={`${theme === 'dark' ? styles.darkbg : styles.lightbg}`}>
			<div className="container-fluid">
	 
				<ThemeChanger/>
				<Switch>
					<Route path="/login" exact component={Login} />
					<Route path="/register" exact component={Register} />
					<Route path="/"  component={Home} />
				</Switch>
				{
					result===1?<Logout/>:""
				}
				<div className="row">
				<div className="col-12 d-flex justify-content-center">
					<p className="lead text-muted font-weight-bolder">Created by Ali Akıncı</p>	
				</div>
				</div>
			</div>
		</div>
	);
}

export default App;
