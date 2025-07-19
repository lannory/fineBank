import React from 'react';
import styles from './TransactionsList.module.scss'; 
import TransactionsItem from './TransactionsItem';
import {Empty} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import BigBtn from '../btns/BigBtn';
import { toggleShowLess, toggleShowMore } from '../../store/transactionsSlice';

function TransactionsList({arr}) {
	// const tmp = [{item: 'okl', time: Date.now(), amount: 200, type: 'oe'} ]
	const showAmount = useSelector(state => state.transactions.showAmount);
	const dispatch = useDispatch();

	const handleLoadMore = () => {
		dispatch(toggleShowMore());
	}

	return (
		<div className={styles.list}>
			{arr.length === 0 || arr.errorDescription ? (<Empty/>) :
			(
				<table className={styles.table}>
					<colgroup>
						<col className={styles.col}/>
						<col className={styles.colTransaction}/>
						<col className={styles.col}/>
						<col className={styles.col}/>
						<col className={`${styles.col} ${styles.colAmount}`}/>
					</colgroup>
					<thead>
						<tr className={styles.head}>
							<td>
								<p className={`${styles.cellContent}`}>Items</p>
							</td>
							<td>
								<p className={`${styles.cellContent}`}>Shop name</p>
							</td>
							<td>
								<p className={`${styles.cellContent}`}>Date</p>
							</td>
							<td>
								<p className={`${styles.cellContent}`}>Payment Method</p>
							</td>
							<td className={styles.colAmount}>
								<p className={`${styles.cellContent}`}>Amount</p>
							</td>
						</tr>
					</thead>
					<tbody>
						{arr.map((item, i) => {
							if(i < showAmount){
								return <TransactionsItem obj={item} key={item.id}/>;
							}else{
								return;
							}
						} )}
					</tbody>
				</table>
			)}
			
			{/* <div className={styles.head}>
				<p className={`${styles.text} ${styles.col}`}>Items</p>
				<p className={`${styles.text} ${styles.col}`}>Shop name</p>
				<p className={`${styles.text} ${styles.col}`}>Date</p>
				<p className={`${styles.text} ${styles.col}`}>Payment Method</p>
				<p className={`${styles.text} ${styles.col} ${styles.amount}`}>Amount</p>
			</div>
			{arr.map(item => <TransactionsItem obj={item} key={item.title}/>)} */}
			<div className={styles.btn}>
				<BigBtn text='load more' onClick={handleLoadMore}/>
				{showAmount > 7 && <BigBtn text='show less' onClick={() => dispatch(toggleShowLess())}/>}
			</div>
		</div>
	);
}

export default TransactionsList;