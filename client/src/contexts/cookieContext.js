import {createContext} from 'react'
import cookie from 'js-cookie';


const CookieContext = createContext(null);

export const CookieProvider = ({childiren}) => {


	const getCookie = (name) => {
		const mycookie = cookie.get(name);
		if(!mycookie)
		{
			return 0
		}
		return 1
	}
	const values = {
		getCookie();
	}


	return(
		<CookieContext.Provider value={values}>{children}</CookieContext.Provider>
	)
}

