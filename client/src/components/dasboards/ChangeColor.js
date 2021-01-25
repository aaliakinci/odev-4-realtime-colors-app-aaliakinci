import { useEffect } from 'react';
import { connection } from '../../socketService';
import ColorBase from '../RealTimeColor/ColorBase';
import ColorChanger from '../RealTimeColor/ColorChanger';

function ChangeColor() {
	useEffect(() => {
		connection();
	}, []);
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12 d-flex justify-content-lg-center">
					<ColorChanger />
				</div>
				<div className="col-md-12 ">
					<ColorBase />
				</div>
			</div>
		</div>
	);
}

export default ChangeColor;
