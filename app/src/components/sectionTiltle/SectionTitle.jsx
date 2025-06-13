import React from 'react';
import styles from './SectionTitle.module.scss'


function SectionTitle({text , className}) {
	return (
		<h2 className={`${styles.title} ${styles[className]}`}>
			{text}
		</h2>
	);
}

export default SectionTitle;