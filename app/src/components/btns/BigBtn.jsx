import React from 'react';
import styles from './BigBtn.module.scss';


function BigBtn({text, onClick, type}) {
	return (
		<button className={styles.btn} onClick={onClick} type={type || 'button'}>
			{text}
		</button>
	);
}

export default BigBtn;