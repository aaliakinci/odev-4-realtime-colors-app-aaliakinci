import {createContext} from 'react'
import cookie from 'js-cookie';


const CookieContext = createContext(null);

export const CookieProvider = ({children}) => {

	const getCookie = (name) => {
		const mycookie = cookie.get(name);
		if(!mycookie)
		{
			return 0
		}
		return 1
	}
	const setCookie = (name,value,expiredTime) => {
	 cookie.set(name,value,{expires:expiredTime});
	}

	const values = {
		getCookie,
		setCookie
	}


	return(
		<CookieContext.Provider value={values}>{children}</CookieContext.Provider>
	)
}

export default CookieContext;