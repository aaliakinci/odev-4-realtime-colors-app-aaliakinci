import React from 'react';
import styles from './styles.module.css';
function Loading() {
	return (
		<>
			<div className="row min-vh-100">
				<div className="col-12 d-flex justify-content-center align-items-center">
					<div class="spinner-border m-0 p-0" role="status" style={{ width: '500px', height: '500px' }}>
						<span class="sr-only">Loading...</span>
					</div>
				</div>
				<div className="col-12 d-flex justify-content-center align-items-start">
					<h2 className="text-center">Yükleniyor...</h2>
				</div>
			</div>
		</>
	);
}

export default Loading;
