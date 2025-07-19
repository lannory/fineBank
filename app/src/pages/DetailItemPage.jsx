import React from 'react';
import DetailItem from './../components/detailItem/DetailItem';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

function DetailItemPage() {
	const {id} = useParams();
	const items = useSelector(state => state.items.items);

	const item = items.find(i => i.id == id);

	console.log(items)

	return (
		<div>
			<DetailItem obj={item}/>
		</div>
	);
}

export default DetailItemPage;