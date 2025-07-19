import React from 'react';
import styles from './TransactionsNav.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { filterTransactions, switchPage } from '../../store/transactionsSlice';


function TransactionsNav(props) {

	const dispatch = useDispatch();

	const navItems = [
		{title: 'All', id: 0}, 
		{title: 'Revenue', id: 1},
		{title: 'Expenses', id: 2}
	]


	const handleSwitchPage = (id) => {
		dispatch(switchPage(id));
		dispatch(filterTransactions());
	}


	const active = useSelector(state => state.transactions.activePage);

	return (
		<nav className={styles.nav}>
			<ul>
				{navItems.map(item => <li key={item.id} className={`${styles.item} ${item.id === active ? styles.active : ''}`} onClick={() => handleSwitchPage(item.id)}>{item.title}</li>)}
			</ul>
		</nav>
	);
}

export default TransactionsNav;