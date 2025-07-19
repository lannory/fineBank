import React, { useEffect } from 'react';
import ItemsList from '../components/items/ItemsList';
import ItemsNav from '../components/items/ItemsNav';
import SectionTitle from '../components/sectionTiltle/SectionTitle';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from '../store/transactionsSlice';

function ItemsPage(props) {

	const dispatch = useDispatch()

	useEffect(() =>{
		dispatch(fetchTransactions());
	}, [])

	let items = useSelector(state => state.items.items);
	const transactions = useSelector(state => state.transactions.transactions);

	items = items.map(item => {
		const transaction = transactions.find(t => t.id === item.transactionId);
		if(transaction){
			const newItem = {...item, buyPrice: transaction.amount};
			return newItem
		}
		return item;
	})



	return (
		<div>
			<SectionTitle text='Items' className={'mb16'}/>
			<ItemsNav/>
			<ItemsList arr={items}/>
		</div>
	);
}

export default ItemsPage;