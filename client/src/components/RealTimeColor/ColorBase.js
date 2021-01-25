import {useEffect,useContext} from 'react'
import { recivedBg } from '../../socketService';
import styles from './styles.module.css';
import ColorContext from '../../contexts/colorContext';
function ColorBase() {
	const {color,setColor} = useContext(ColorContext)
	useEffect(() => {
		recivedBg((bg)=>setColor(bg));
	}, [color,setColor])
	return (
		<div className={styles.colorBase} style={{backgroundColor:color}}>
			<p className="text-hide">Kodluyoruz Bootcamp Odev-4 Ali Akıncı</p>
		</div>
	)
}

export default ColorBase
