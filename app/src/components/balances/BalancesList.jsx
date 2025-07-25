import React from 'react';
import styles from './BalancesList.module.scss';
import BalancesCard from './BalancesCard';


function BalancesList({balances}) {

	return (
		<div className={styles.wrapper}>
			{balances.map(item => <BalancesCard key={item.cardNumber} obj={item}/>)}
			<BalancesCard type='settings'/> 
		</div>
	);
}

export default BalancesList;