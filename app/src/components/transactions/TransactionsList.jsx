import React from 'react';
import styles from './TransactionsList.module.scss'; 
import TransactionsItem from './TransactionsItem';


function TransactionsList({arr}) {
	return (
		<div className={styles.list}>
			<div className={styles.head}>
				<p className={`${styles.text} ${styles.col}`}>Items</p>
				<p className={`${styles.text} ${styles.col}`}>Shop name</p>
				<p className={`${styles.text} ${styles.col}`}>Date</p>
				<p className={`${styles.text} ${styles.col}`}>Payment Method</p>
				<p className={`${styles.text} ${styles.col} ${styles.amount}`}>Amount</p>
			</div>
			{arr.map(item => <TransactionsItem obj={item} key={item.title}/>)}
			<button className={styles.btn}>load More</button>
		</div>
	);
}

export default TransactionsList;