import React from 'react';
import styles from './SideList.module.scss';


function SidebarItem({active, icon, text, onClick}) {

	return (
		<div className={`${styles.navItem}  ${active ? styles.active : ''}`} onClick={onClick}>
			<img src={`/sidebar/${icon}.png`} alt="" />
			<p>{text}</p>
		</div>
	);
}

export default SidebarItem;