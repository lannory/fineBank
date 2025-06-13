import React from 'react';
import styles from './Statistic.module.scss';
import StatisticChart from './StatisticChart';


function Statistics(props) {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.mainTitle}>Statistics</h2>
			<div className={styles.chartWrapper}>
				<h2 className={styles.title}>Weekly Comparison <img src="../../../img/chevron-down.svg" alt="" /></h2>
				<div><StatisticChart/></div>
			</div>
		</div>
	);
}

export default Statistics;