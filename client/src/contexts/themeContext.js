import { createContext, useState, useEffect } from 'react';
import cookie from 'js-cookie';
const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState('light');
	const myThemeCookie = cookie.getJSON('theme');

	useEffect(() => {
		if (myThemeCookie === undefined) 
		{
			setTheme('light');
		}
		setTheme(myThemeCookie.theme);
	}, []);
	useEffect(() => {
		cookie.set('theme', { theme }, { expires: 30 });
	}, [theme]);
	console.log(theme);
	const values = {
		theme,
		setTheme,
	};
	return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>;
};
export default ThemeContext;
