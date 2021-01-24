import {useContext} from 'react'
import ColorContext from '../../contexts/colorContext';
import ThemeContext from '../../contexts/themeContext'
import { sendBg } from '../../socketService';

function ColorChanger() {
	const {theme} = useContext(ThemeContext);
	const {color,setColor} = useContext(ColorContext)
	const handleChange=(e)=>{
		setColor(e.target.value);
		sendBg(e.target.value);
	}
	return (
		<div className="form-group">
			<label htmlFor="colorChanger" className="h3 font-weight-bolder mr-2 text-white">Renk değiştirmek için</label>
			 <input className="form-control-sm" id="colorChanger" name="colorChanger" type="color" onChange={handleChange}/>	 
		</div>
	)
}

export default ColorChanger
