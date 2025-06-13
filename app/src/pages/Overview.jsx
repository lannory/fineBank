import React from 'react';
import Balance from '../components/overview/balance/Balance';
import Goals from '../components/overview/goals/Goals';
import UpcomingBill from '../components/overview/bill/UpcomingBill';
import './Overview.scss';
import Transactions from '../components/overview/transactions/Transactions';
import Statistics from '../components/overview/statistics/Statistics';
import ExpensesBreakdown from '../components/overview/expenses/ExpensesBreakdown';

let data ={ 
	transactions : [{icon: 1, title: 'GTR 5', subtitle: 'Gadget & Gea', amount: '160.00', date: '17 May 2023'},
	{icon: 2, title: 'Polo Shirt', subtitle: 'XL fashions', amount: '20.00', date: '17 May 2023'},
	{icon: 3, title: 'Biriyani', subtitle: 'Hajir Biriyani', amount: '10.00', date: '17 May 2023'},
	{icon: 4, title: 'Taxi Fare', subtitle: 'Uber', amount: '12.00', date: '17 May 2023'},
	{icon: 5, title: 'Keyboard', subtitle: 'Gadget & Gea', amount: '22.00', date: '17 May 2023'}],
	expenses: [{icon: '01', category: 'Housing', amount: '250.00', percent: '15', increase: true },
				{icon: '02', category: 'Food', amount: '350.00', percent: '0.8', increase: '' },
				{icon: '03', category: 'Transportation', amount: '50.00', percent: '12', increase: '' },
				{icon: '04', category: 'Entertainment', amount: '80.00', percent: '15', increase: '' },
				{icon: '05', category: 'Shopping', amount: '420.00', percent: '25', increase: true },
				{icon: '0', category: 'Others', amount: '650.00', percent: '23', increase: true }



	]
}

function Overview() {
	return (
		<main>
			<div className='top-row' >
				<Balance/>
				<Goals/>
				<UpcomingBill/>
			</div>
			<div className="bottom-row">
				<Transactions transactions={data.transactions}/>
				<div className="right">
					<Statistics/>
					<ExpensesBreakdown arr={data.expenses}/>
				</div>
			</div>
		</main>
	);
}

export default Overview;