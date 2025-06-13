import React from 'react';
import styles from './ExpensesBreakdown.module.scss';
import ExpensesBreakdownCard from './ExpensesBreakdownCard';

function ExpensesBreakdown({arr}) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.texWrapper}>
				<h2 className={styles.mainTitle}>Expenses Breakdown</h2>
				<p className={styles.mainText}>*Compare to last month</p>
			</div>
			<div className={styles.cardWrapper}>
				
				{arr.map(item => <ExpensesBreakdownCard obj={item} key={item.category}/>)}
			</div>
		</div>
	);
}

export default ExpensesBreakdown;