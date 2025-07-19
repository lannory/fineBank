import React, { useEffect, useState } from 'react';
import SectionTitle from './../components/sectionTiltle/SectionTitle';
import TransactionsNav from '../components/transactions/TransactionsNav';
import TransactionsList from '../components/transactions/TransactionsList'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from '../store/transactionsSlice';

function Transactions(props) {

	const dispatch = useDispatch();

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
			<SectionTitle text='Recent Transaction' className={'mb16'}/>
			<TransactionsNav/>
			{/* {arr.length < 1 ? <button onClick={getData}>get data</button> : ''} */}
			<TransactionsList arr={isFiltred? filtredTransactions : transactions}/>
		</div>
	);
}

export default Transactions;