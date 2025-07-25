
import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
	items: []
}

export const fetchItems = createAsyncThunk(
	'items/fetchItems', 
	async (_, {rejectWithValue}) => {
		try {
			const response = await fetch('http://localhost:3001/items');

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const data = await response.json();
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
  }
);

export const postItems = createAsyncThunk(
	'items/postItems',
	async(data)=>{
		console.log(data)
		try{
			const response = await fetch('http://localhost:3001/items', {
				method: 'POST', 
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({...data, id: nanoid()})
			});
			const res = response.json();
			console.log(res)
		}catch(error){
			console.error(error)
		}
	}
);

export const editItems = createAsyncThunk(
	'items/changeItems',
	async ({data, id}) => {
		console.log(data);
		try{
			const response = await fetch(`http://localhost:3001/items/${id}`,{
				method: 'PATCH',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data)
			})
		}catch(err){
			console.log(err);
		}
	}
)

export const deleteItems = createAsyncThunk(
	'items/deleteItems',
	async({id}) => {
		console.log(id);
		try{
			const response = await fetch(`http://localhost:3001/items/${id}`, {
				method: 'DELETE',
				headers: {
					"Content-Type": "application/json"
				},
			})
		}
		catch(err){
			console.log(err);
		}
	}
)

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
		},
		configureItem: (state, action) =>{
			const obj = action.payload;
			
			state.items = state.items.map(item => {
				if(item.id === obj.id){
					return obj;
				}
				return item;
			})
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchItems.fulfilled, (state, action) => {
				state.items = action.payload;
			})
			.addCase(fetchItems.rejected, (state, action)=>{
				console.log('err');
			})
	}
})

export const {addItem, testDone, deleteItem, configureItem} = itemsSlice.actions;

export default itemsSlice.reducer;