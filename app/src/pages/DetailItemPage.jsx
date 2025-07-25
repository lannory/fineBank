import React from 'react';
import DetailItem from './../components/detailItem/DetailItem';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import ItemConfigure from '../components/detailItem/ItemConfigure';
import styles from './DetailItemPage.module.scss'
import { useState, useEffect } from 'react';
import { fetchItems } from '../store/itemsSlice';


function DetailItemPage() {
	const {id} = useParams();
	const items = useSelector(state => state.items.items);
	const dispatch = useDispatch();

	const item = items.find(i => i.id == id);

	const [isConfigureOpened, setIsConfigureOpened] = useState(false);

	console.log(items)

	const handleConfiguration = () => {
		setIsConfigureOpened(!isConfigureOpened);
	}

	

	return (
		<div className={styles.wrapper}>
			<DetailItem obj={item} openConfiguration={handleConfiguration}/>
			{isConfigureOpened && <ItemConfigure obj={item} closeConfiguration={handleConfiguration}/>}
		</div>
	);
}

export default DetailItemPage;