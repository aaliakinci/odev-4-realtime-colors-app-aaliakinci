import { useContext} from 'react';
import CookieContext from '../../contexts/cookieContext';
 
import TimeAgo from 'react-timeago';
import ThemeContext from '../../contexts/themeContext';
function ChatItem({ message, user, time }) {
	const { userCookie } = useContext(CookieContext);
	const { theme } = useContext(ThemeContext);
 
	return (
		<div className={user._id===userCookie.user._id?"media w-50 ml-auto mb-3":"media w-50 mr-auto mb-3"}>
		<div className="media-body">
			<div className={theme==="light"?'bg-info rounded py-2 px-3 mb-2':'bg-secondary rounded py-2 px-3 mb-2'}>
				<p className="text-small mb-0 text-white">{message}</p>
			</div>
			<p className="small text-muted text-right">	<TimeAgo date={time} minPeriod={'minute'} /></p>
		</div>
	</div>



 
	);
}

export default ChatItem;
