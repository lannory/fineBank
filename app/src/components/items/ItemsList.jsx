import React from 'react';
import ItemsListItem from './ItemsListItem';
import styles from './ItemsList.module.scss'

function ItemsList({arr}) {

	return (
		<div className={styles.wrapper}>
			{
				arr.map(item => 
					<ItemsListItem obj={item} key={item.id}/>
				)
			}
			
		</div>
	);
}

export default ItemsList;