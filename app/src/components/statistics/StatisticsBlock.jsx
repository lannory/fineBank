import React, { useEffect, useState } from 'react';
import { fetchItems } from '../../store/itemsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import styles from './StatisticsBlock.module.scss'
import moment from 'moment';



function StatisticsBlock(props) {
	const months = [
		'January', 'February', 'March', 'April',
		'May', 'June', 'July', 'August',
		'September', 'October', 'November', 'December'
	];

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchItems());
	}, []);

	const currMonth = new Date().getMonth();
	const items = useSelector(state => state.items.items)?.map(item=> ({...item, profit: item.sellPrice - item.buyPrice}));
	const [month, setMonth] = useState(currMonth)


	const countSells = () => {
		let itemSold = 0;
		let profit = 0;
		const test = items.forEach(item => {
			if(moment(item.sellDate,'ll').month() === month){
				itemSold++;
				profit+=item.profit;
			}
		})
		return {itemSold, profit};
	}

	let {itemSold} = countSells();
	let {profit} = countSells();

	const activeMonths = months.filter((item, i) => i <= currMonth)
					.map((item, i) => {
						return {
									key: i,
									label: (
										<button> {item} </button>
									),
									onClick: () => {
										setMonth(i)
									}
								}
					}) 

	console.log(activeMonths)
	

	

	
	console.log(countSells());
	
	return (
		<div>
			<div className={styles.dropdown}>
				<Dropdown menu={{ items: activeMonths }} trigger='click'>
					<a onClick={e => e.preventDefault()}>
					<Space>
						{months[month]}
						<DownOutlined />
					</Space>
					</a>
 				</Dropdown>
			</div>
			<div className={styles.sold}>
				Amount of items sold in this month {itemSold}
			</div>
			<div className={styles.profit}>
				Profit {profit}
			</div>
		</div>
	);
}

export default StatisticsBlock;