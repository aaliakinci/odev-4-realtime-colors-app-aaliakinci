import { useEffect, useContext, useState } from 'react';
import ThemeContext from '../../contexts/themeContext';
import Switch from '../../../node_modules/@material-ui/core/Switch/Switch';
function ThemeChanger() {
	const { theme, changeTheme } = useContext(ThemeContext);
	const [changerTheme, setChangerTheme] = useState({
		checkedA: false,
	});
	useEffect(() => {
		setChangerTheme({ ...changerTheme, checkedA: theme === 'light' ? false : true });
	}, [theme]);
	const handleChange = (event) => {
		changeTheme(theme === 'light' ? 'dark' : 'light');
		setChangerTheme({ ...changerTheme, [event.target.name]: event.target.checked });
	};

	return (
		<div className="row">
			<div className="col-12 d-flex justify-content-between">
				<p className="lead font-weight-bolder text-center"> Realtime Color - Chat</p>

				<div className="form-group">
					<label>{theme==="light"?'Koyu Tema':'Açık Tema'}</label>
				<Switch
					checked={changerTheme.checkedA}
					onChange={handleChange}
					name="checkedA"
					inputProps={{ 'aria-label': 'secondary checkbox' }}
				/>
				</div>
			</div>
		</div>
	);
}

export default ThemeChanger;
