import React from 'react';
import styles from './Transactions.module.scss'


function TransactionCard({transaction}) {
	return (
		<div className={styles.card}>
			<img
				src={`../../../img/transactions/0${transaction.icon}.svg`}
				alt="Transaction Icon"
				className={styles.icon}
			/>
			<div className={styles.description}>
				<h3 className={styles.title}>{transaction.title}</h3>
				<p className={styles.subtitle}>{transaction.subtitle}</p>
			</div>
			<div className={styles.data}>
				<p className={styles.price}>${transaction.amount}</p>
				<p className={styles.date}>{transaction.date}</p>
			</div>
		</div>
	);
}

export default TransactionCard;