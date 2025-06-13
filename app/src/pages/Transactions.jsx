import React from 'react';
import SectionTitle from './../components/sectionTiltle/SectionTitle';
import TransactionsNav from '../components/transactions/TransactionsNav';
import TransactionsList from '../components/transactions/TransactionsList'

function Transactions(props) {
	const arr = [
		{icon: 'gaming', title: 'GTR 5', shop: 'Gadget & Gear', date: '17 May, 2023', amount: '160.00' },
		{icon: 'shopping', title: 'Polo shirt', shop: 'XL fashions', date: '17 May, 2023', amount: '20.00' },
		{icon: 'food', title: 'Biriyani', shop: 'Hajir Biriyani', date: '17 May, 2023', amount: '12.00' },
		{icon: 'movie', title: 'Movie ticket', shop: 'Inox', date: '17 May, 2023', amount: '15.00' },
		{icon: 'taxi', title: 'Taxi fare', shop: 'Uber', date: '17 May, 2023', amount: '10.00' },
		{icon: 'food', title: 'Pizza', shop: 'Pizza Hit', date: '17 May, 2023', amount: '20.00' },
		{icon: 'gaming', title: 'Keyboard', shop: 'Gadget & Gear', date: '17 May, 2023', amount: '30.00' }

	]

	return (
		<div className='transactions'> 
			<SectionTitle text='Recent Transaction' className={'mb16'}/>
			<TransactionsNav/>
			<TransactionsList arr={arr}/>
		</div>
	);
}

export default Transactions;