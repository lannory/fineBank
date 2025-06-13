import React from 'react';
import styles from './Transactions.module.scss';
import TransactionCard from './TransactionCard';


function Transactions({transactions}) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.textWrapper}>
				<h2 className={styles.mainTitle}>Recent Transaction</h2>
				<a href="" className={styles.viewLink}>View All<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
				<path d="M6 12L10 8L6 4" stroke="#878787" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
				</svg></a>
			</div>
			<div className={styles.cardWrapper}>
				<nav className={styles.nav}>
					<button className={`${styles.link} ${styles.active}`}>All</button>
					<button className={styles.link}>Revenue</button>
					<button className={styles.link}>Expenses</button>
				</nav>
				<div className={styles.list}>
					{/* <div className={styles.card}>
						<img
							src="../../../img/transactions/01.svg"
							alt="Transaction Icon"
							className={styles.icon}
						/>
						<div className={styles.description}>
							<h3 className={styles.title}>GTR 5</h3>
							<p className={styles.subtitle}>Gadget & Gear</p>
						</div>
						<div className={styles.data}>
							<p className={styles.price}>$160.00</p>
							<p className={styles.date}>17 May 2023</p>
						</div>
					</div> */}
					{transactions.map(obj => <TransactionCard  key={obj.title} transaction={obj}/> )}
					
				</div>
						</div>
			</div>
	);
}

export default Transactions;