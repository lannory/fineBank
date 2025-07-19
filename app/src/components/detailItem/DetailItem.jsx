import React from 'react';
import styles from './DetailItem.module.scss'
import { SettingOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { testDone } from '../../store/itemsSlice';

function DetailItem({obj}) {
	
	const dispatch = useDispatch()

	return (
		<div className={styles.project}>
			<img src="/uploads/item.png" alt="" className={styles.img} />
			<div className={styles.wrapper}>
				<h2 className={styles.title}>{obj.title}</h2>
				<p className={styles.subtitle}>Condition: {obj.cond}</p>
				<div className={styles.widgets}>
					<div className={styles.price}>Bought: <span>{obj.buyPrice}</span> uah</div>
					<div className={styles.price}>Sold: <span>{obj.sellPrice || 'not sold yet'}</span> {obj.sellPrice && 'uah'}</div>
				</div>
				<div className={styles.widgets}>
					<div className={styles.price}>Bought: <span>{obj.buyDate}</span></div>
					<div className={styles.price}>Sold: <span>{obj.sellDate || 'not sold yet'}</span></div>
				</div>
				<div className={styles.desc}>
					<h3 className={styles.descTitle}>
						Description
					</h3>
					<p className={styles.text}>
						{obj.desc}
					</p>
				</div>
				<div className={styles.list}>
					<h3 className={styles.descTitle}>
						Accesories
					</h3>
					<div className={styles.accsList}>
						{obj.accs.map(accs => 
							<div key={accs} className={styles.accsItem}>{accs}</div>
						)}
					</div>
				</div>
				<div className={styles.tests}>
					<h3 className={styles.descTitle}>
						Tests
					</h3>
					<div className={styles.testsList}>
						{obj.tests.map(({type, isCompleted}) =>
							<div className={styles.test}>
								<input type="checkbox" checked={isCompleted} onChange={() => dispatch(testDone({id: obj.id, type}))}/>
								<p>{type}</p>
							</div>
						)}
					</div>
				</div>
			</div>
			<button className={styles.configure}>
				<SettingOutlined />
			</button>
		</div>
	);
}

export default DetailItem;