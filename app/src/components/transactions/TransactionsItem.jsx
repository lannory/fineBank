import React from 'react';
import styles from './TransactionsList.module.scss'
import moment from 'moment';

function TransactionsItem({obj}) {

	console.log(obj);

	return (
		<tr className={styles.row}>
			<td>
				<div className={`${styles.item} ${styles.cellContent}`}>
					<img src={`/transactions/${obj.icon}.svg`} alt="" />
					<h4 className={`${styles.itemTitle}`}>{obj.title}</h4>
				</div>
			</td>
			<td>
				<p className={`${styles.cellContent}`}>{obj.description || 123}</p>
			</td>
			<td>
				<p className={`${styles.cellContent}`}>{moment(obj.time).format('LLL') || obj.date}</p>
			</td>
			<td>
				<p className={`${styles.cellContent}`}>{obj.type}</p>
			</td>
			<td className={styles.colAmount}>
				<p className={`${styles.cellContent}`}>{obj.amount} uah</p>
			</td>
			{/* <div className={`${styles.item} ${styles.col}`}>
				<img src={`/transactions/${obj.icon}.svg`} alt="" />
				<h4 className={`${styles.itemTitle} ${styles.text}`}>{obj.title}</h4>
			</div>
			<p className={`${styles.text} ${styles.col}`}>{obj.description || 123}</p>
			<p className={`${styles.text} ${styles.col}`}>{moment(obj.time * 1000).format('LLL') || obj.date}</p>
			<p className={`${styles.text} ${styles.col}`}>Credit Card</p>
			<p className={`${styles.text} ${styles.col} ${styles.amount}`}>${obj.amount / 100}</p> */}
		</tr>
	);
}

export default TransactionsItem;