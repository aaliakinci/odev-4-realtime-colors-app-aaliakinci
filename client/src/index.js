import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import { UserProvider } from './contexts/userContext';
import { CookieProvider } from './contexts/cookieContext';
import { ThemeProvider } from './contexts/themeContext';
import { ChatProvider } from './contexts/chatContext';
import { RoomProvider } from './contexts/roomContext';
import { ColorProvider } from './contexts/colorContext';

ReactDOM.render(
	<BrowserRouter>
		<React.StrictMode>
			<UserProvider>
				<CookieProvider>
					<ChatProvider>
						<RoomProvider>
							<ThemeProvider>
								<ColorProvider>
									<App />
								</ColorProvider>
							</ThemeProvider>
						</RoomProvider>
					</ChatProvider>
				</CookieProvider>
			</UserProvider>
		</React.StrictMode>
	</BrowserRouter>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
