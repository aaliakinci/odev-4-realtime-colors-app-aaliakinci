import { createContext, useState, useEffect } from 'react';
import cookie from 'js-cookie';
const ThemeContext = createContext(null);


export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState('light');
	useEffect(() => {
	const myThemeCookie = cookie.getJSON('theme');
		if (myThemeCookie === undefined) {
			setTheme('light');
		}
		setTheme(myThemeCookie.theme);
	}, [setTheme]);
	useEffect(() => {
		cookie.set('theme', { theme }, { expires: 30 });
	}, [theme]);

	const values = {
		theme,
		setTheme,
	};
	return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>;
};
export default ThemeContext;
