import React, { createContext, useState, useEffect } from 'react';

const localColor = localStorage.getItem('bg') || '#164069';

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
	const [color, setColor] = useState(localColor);
	const values = {
		color,
		setColor,
	};
	useEffect(() => {
		setColor(color);
		localStorage.setItem('bg', color);
	}, [color]);

	return <ColorContext.Provider value={values}>{children}</ColorContext.Provider>;
};

export default ColorContext;
