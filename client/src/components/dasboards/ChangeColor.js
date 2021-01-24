import React from 'react';
import ColorBase from '../RealTimeColor/ColorBase';
import ColorChanger from '../RealTimeColor/ColorChanger';

function ChangeColor() {
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
