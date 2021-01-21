import styles from './App.module.css';
import { Switch, Route } from 'react-router-dom';
import Login from './components/dasboards/Login';
import Register from './components/dasboards/Register';
import Home from './components/dasboards/Home';
import { useContext, useEffect } from 'react';
import ThemeContext from './contexts/themeContext';
import cookie from 'js-cookie';
import ThemeChanger from './components/ThemeChanger/ThemeChanger';
function App() {
	const { theme } = useContext(ThemeContext);
	// useEffect(() => {
	// 	const myCookie = cookie.getJSON('thema');
	// }, []);
	return (
		<div className={`${theme === 'dark' ? styles.darkbg : ''}`}>
			<div className="container-fluid">
				<ThemeChanger/>
				<Switch>
					<Route path="/login" exact component={Login} />
					<Route path="/register" exact component={Register} />
					<Route path="/" exact component={Home} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
