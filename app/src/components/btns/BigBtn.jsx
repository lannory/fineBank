import React from 'react';
import styles from './BigBtn.module.scss';


function BigBtn({text, onClick}) {
	return (
		<button className={styles.btn} onClick={onClick}>
			{text}
		</button>
	);
}

export default BigBtn;