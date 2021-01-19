import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './components/dasboards/Login';
import Register from './components/dasboards/Register';
import Home from './components/dasboards/Home'
function App() {

	return (
		<div className="container-fluid">
			<Switch>
				<Route path="/login" exact component={Login} />
				<Route path="/register" exact component={Register} />
				<Route path="/" exact component={Home}/>
			</Switch>
		</div>
	);
}

export default App;
