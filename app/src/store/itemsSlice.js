
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [
		{
			id: 1,
			title: 'gopro hero 12', 
			cond: 'good',
			buyPrice: 170, 
			sellPrice: 200, 
			buyDate: '19 jun 2025', 
			sellDate: '22 jul 2025',
			img: 'item.png',
			desc: 'lowerowerkowijefjsajfdqaojndjhnkiqhjikewdjhikqwwhjikdqhjkwedhiujqehjkqwihujewjhqejqwhkehjkqdw',
			accs: ['battery', 'case', 'shorty'],
			tests: [
				{type: 'no sd errors', isCompleted: true},
				{type: 'overheating', isCompleted: true},
				{type: 'micro', isCompleted: false},
				{type: 'false', isCompleted: true}
			]
		},
		{
			id: 2,
			title: 'gopro hero 13', 
			cond: 'good',
			buyPrice: 190, 
			sellPrice: 220, 
			buyDate: '23 jun 2025', 
			sellDate: '25 jul 2025',
			img: 'item.png',
			desc: 'lowerowerkowijefjsajfdqaojndjhnkiqhjikewdjhikqwwhjikdqhjkwedhiujqehjkqwihujewjhqejqwhkehjkqdw',
			accs: ['battery', 'case', 'mounts'],
			tests: [
				{type: 'no sd errors', isCompleted: true},
				{type: 'overheating', isCompleted: true},
				{type: 'micro', isCompleted: true},
				{type: 'stab', isCompleted: false}
			]
		},
		{
			id: 3,
			title: 'gopro hero 11', 
			cond: 'good',
			buyPrice: 150, 
			sellPrice: 200, 
			buyDate: '19 jun 2025', 
			sellDate: '11 jul 2025',
			img: 'item.png',
			desc: 'lowerowerkowijefjsajfdqaojndjhnkiqhjikewdjhikqwwhjikdqhjkwedhiujqehjkqwihujewjhqejqwhkehjkqdw',
			accs: ['battery', 'case', 'mounts'],
			tests: [
				{type: 'no sd errors', isCompleted: true},
				{type: 'overheating', isCompleted: true},
				{type: 'micro', isCompleted: true},
				{type: 'stab', isCompleted: true}
			]
		}
	]
}

const itemsSlice = createSlice({
	initialState,
	name: 'items',
	reducers: {
		addItem: (state, action) =>{
			const item = action.payload;
			state.items.push(item);
		}, 
		testDone: (state, action) => {
			const {id, type} = action.payload;

			const item = state.items.find(i => i.id == id);

			const test = item.tests.find(tst => tst.type === type);

			test.isCompleted = !test.isCompleted;
		},
		deleteItem: (state, action) =>{
			const id = action.payload;
			state.items = state.items.filter(item => item.id !== id);
		}
	}
})

export const {addItem, testDone, deleteItem} = itemsSlice.actions;

export default itemsSlice.reducer;