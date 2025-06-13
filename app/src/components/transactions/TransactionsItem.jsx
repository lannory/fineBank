import React from 'react';
import styles from './TransactionsItem.module.scss'


function TransactionsItem({obj}) {
	return (
		<div className={styles.card}>
			<div className={`${styles.item} ${styles.col}`}>
				<img src={`../../../img/transactions/${obj.icon}.svg`} alt="" />
				<h4 className={`${styles.itemTitle} ${styles.text}`}>{obj.title}</h4>
			</div>
			<p className={`${styles.text} ${styles.col}`}>{obj.shop}</p>
			<p className={`${styles.text} ${styles.col}`}>{obj.date}</p>
			<p className={`${styles.text} ${styles.col}`}>Credit Card</p>
			<p className={`${styles.text} ${styles.col} ${styles.amount}`}>${obj.amount}</p>
		</div>
	);
}

export default TransactionsItem;