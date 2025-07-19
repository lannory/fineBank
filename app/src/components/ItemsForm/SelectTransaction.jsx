import React from 'react';
import styles from './SelectTransaction.module.scss'
import {Select} from 'antd'
import { useSelector } from 'react-redux';
import moment from 'moment';

const {Option} = Select;

function SelectTransaction({value, onChange}) {

	const transactions = useSelector(state => state.transactions.transactions);
	const filtredTransactions = transactions.filter(transaction => transaction.description === 'eBay')

	return (
		<div className={styles.wrapper}>
			<Select
				value={value || undefined}
				placeholder='Select transaction'
				onChange={onChange}
				className={styles.dropdown}
			>
				{filtredTransactions.map(item => 
					<Option key={item.id} value={item.id}>
						<div className={styles.option}>
							<div className={styles.date}>{moment(item.time).format('LLL')}</div>
							<div className={styles.amount}>{-1 * item.amount} uah</div>
						</div>
          			</Option>
				)}
			</Select>
		</div>
	);
}

export default SelectTransaction;