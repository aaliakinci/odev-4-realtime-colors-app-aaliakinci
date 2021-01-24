import {createContext,useState,useEffect} from 'react'
import cookie from 'js-cookie';


const CookieContext = createContext(null);

export const CookieProvider = ({children}) => {
	const [userCookie, setUserCookie] = useState([])
	const getCookie = (name) => {
		const mycookie = cookie.get(name);
		if(!mycookie)
		{
			return 0
		}
		return 1
	}
	const callCookie = (name) => {
		const calledcookie = cookie.getJSON(name);
		return calledcookie;
	}
	useEffect(() => {
		setUserCookie(cookie.getJSON('realtimecolor'));
	}, [])
	const setCookie = (name,value,expiredTime) => {
	 cookie.set(name,value,{expires:expiredTime});
	}
	const deleteCookie=(name)=>{
		cookie.remove(name);
	}

	const values = {
		getCookie,
		setCookie,
		callCookie,
		userCookie,
		deleteCookie
	}


	return(
		<CookieContext.Provider value={values}>{children}</CookieContext.Provider>
	)
}

export default CookieContext;