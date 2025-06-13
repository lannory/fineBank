import React from 'react';
import styles from './ExpensesBreakdown.module.scss';

function ExpensesBreakdownCard({obj}) {
	return (
		<div className={styles.card}>
			<div className={styles.icon}><img src={`../../../img/expenses/${obj.icon}.svg`} /></div>
			<div className={styles.desc}>
				<p className={styles.subtitle}>{obj.category}</p>
				<h3 className={styles.amount}>${obj.amount}</h3>
				<p className={styles.percent}>{obj.percent}$% {obj.increase ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
																				<path d="M8 12.6667V3.33334" stroke="#E73D1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
																				<path d="M3.33334 8.00001L8.00001 3.33334L12.6667 8.00001" stroke="#E73D1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
																			</svg> :<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
																						<path d="M8 2.33325V11.6666" stroke="#4DAF6E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
																						<path d="M12.6666 7L7.99992 11.6667L3.33325 7" stroke="#4DAF6E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
																						</svg> }</p>
			</div>
			<img src="../../../img/expenses/arrow-right.svg" className={styles.arrow} />
		</div>
	);
}

export default ExpensesBreakdownCard;