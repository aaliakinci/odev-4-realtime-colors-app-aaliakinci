import { createContext, useState ,useEffect } from 'react';
import cookie from 'js-cookie'
const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState();
	const myThemeCookie = cookie.getJSON('theme')
	if(myThemeCookie===undefined)
	{
		setTheme('light');
	}
	useEffect(() => {
		 setTheme(myThemeCookie.theme);
	}, [])
  useEffect(() => {
		cookie.set('theme',{theme},{expires:30});
	}, [theme])
	 

	const changeTheme = (value) => {
		setTheme(value);
	};
	const values = {
		theme,
		changeTheme,
	};
	return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>;
};
export default ThemeContext;
