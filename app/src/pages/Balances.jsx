import React, { useEffect } from 'react';
import './Balances.scss'
import SectionTitle from './../components/sectionTiltle/SectionTitle';
import BalancesList from '../components/balances/BalancesList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBalances } from '../store/balanceSlice';

// let arr = [{service: 'Master Card', img: 'Mastercard-Logo', amount: 25000, card: '3388 4556  8860 8***', type: 'Credit Card' },
// 			{service: 'AB Bank Ltd', img: 'Visa_Logo', amount: 25000, card: '693 456  69 9****', type: 'Checking' },
// 			{service: 'Brac Bank Ltd.', amount: 25000, card: '133 456  886 8****', type: 'Savings'  },
// 			{service: 'AB Bank Ltd', amount: 25000, card: '698 456  866 2****', type: 'Investment' },
// 			{service: 'City Bank Ltd.', amount: 25000, card: '363 456  896 6****', type: 'Loan' }
// ]


function Balances(props) {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchBalances())
	}, [])

	let balances = useSelector(state => state.balance.balances);

	console.log(balances)

	return (
		<div className='balances-wrapper'>
			<SectionTitle text='Balances' className={'mb16'}/>
			<BalancesList balances={balances}/>
		</div>
	);
}

export default Balances;