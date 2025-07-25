import React from 'react';
import styles from './BalanceCard.module.scss';

function BalancesCard({obj, type}) {
	return (
		<div className={styles.card}>
			{type != 'settings' ? 
				<>
					<div className={styles.header}>
						<h5 className={styles.title}>{obj.fromApi ? 'mono' : ''} {obj.type}</h5>
						<p className={styles.service}>{obj.service} <img src={`/${obj.img}.png`} alt="" /></p>
					</div>
					<div className={styles.wrapper}>
						<div className={styles.item}>
							<h3 className={styles.itemTitle}>{obj.cardNumber}</h3>
							<p className={styles.subtitle}>Account Number</p>
						</div>
						<div className={styles.item}>
							<h3 className={styles.itemTitle}>{obj.balance} {obj.currency}</h3>
							<p className={styles.subtitle}>Total amount</p>
						</div>
					</div>
					<div className={styles.btns}>
						<button className={`${styles.removeBtn} ${styles.btn}`}>Remove</button>
						<button className={`${styles.detailsBtn} ${styles.btn}`}>Details <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
							<path d="M6 12L10 8L6 4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</svg></button>
					</div> 
				</>: 
					<div className={styles.settings}>
						<button className={styles.addBtn}>Add accounts</button>	
						<button className={styles.editBtn}>Edit Accounts</button>
					</div>}
		</div>
	);
} 

export default BalancesCard;