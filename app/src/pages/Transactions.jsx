import React, { useEffect, useState } from 'react';
import SectionTitle from './../components/sectionTiltle/SectionTitle';
import TransactionsNav from '../components/transactions/TransactionsNav';
import TransactionsList from '../components/transactions/TransactionsList'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from '../store/transactionsSlice';
import BigBtn from '../components/btns/BigBtn';
import styles from './Transactions.module.scss'
import { useNavigate } from 'react-router';
function Transactions(props) {

	const dispatch = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		dispatch(fetchTransactions());
	}, [])

	const transactions = useSelector(state => state.transactions.transactions);
	const filtredTransactions = useSelector(state => state.transactions.filtredTransactions);
	const isFiltred = useSelector(state => state.transactions.isFiltred);


	if(!transactions){
		return <p>Loading</p>;
	}
	


	return (
		<div className='transactions'> 
			<div className={styles.header}>
				<SectionTitle text='Recent Transaction' className={'mb16'}/>
				<BigBtn text={'Add transaction'} onClick={() => navigate('/createtransaction')}/>
			</div>
			<TransactionsNav/>
			{/* {arr.length < 1 ? <button onClick={getData}>get data</button> : ''} */}
			<TransactionsList arr={isFiltred? filtredTransactions : transactions}/>
		</div>
	);
}

export default Transactions;