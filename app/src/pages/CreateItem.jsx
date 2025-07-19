import React from 'react';
import SectionTitle from '../components/sectionTiltle/SectionTitle';
import ItemsForm from '../components/ItemsForm/ItemsForm';

function CreateItem(props) {
	return (
		<div>
			<SectionTitle className='mb16' text='Add item'/>
			<ItemsForm/>
		</div>
	);
}

export default CreateItem;