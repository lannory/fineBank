import React from 'react';
import styles from './TransactionsNav.module.scss';


function TransactionsNav(props) {
	return (
		<nav className={styles.nav}>
			<ul>
				<li className={`${styles.item} ${styles.active}`}>All</li>
				<li className={styles.item}>Revenue</li>
				<li className={styles.item}>Expenses</li>
			</ul>
		</nav>
	);
}

export default TransactionsNav;