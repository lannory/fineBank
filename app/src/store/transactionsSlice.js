import {createAsyncThunk, createSlice, nanoid} from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = {
	transactions: [],
	filtredTransactions: [],
	isFiltred: false,
	activePage: 0,
	showAmount: 7
}

export const postTransactions = createAsyncThunk(
	'transactions/postTransactions',
	async (data) =>{
		console.log(data)
		try{
			const response = await fetch('http://localhost:3001/transactions', {
				method: 'POST', 
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({...data, id: nanoid()})
			});
			const res = response.json();
			console.log(res)
		}catch(error){
			console.log(error)
		}
	}
)

export const fetchTransactions = createAsyncThunk(
	'transactions/fetchTransactions',
	async (_, {rejectWithValue}) => {
		try {
			const response = await fetch('http://localhost:3001/transactions');

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const data = await response.json();
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
  }
)

const transactionsSlice = createSlice({
	initialState,
	name: 'transactions',
	reducers: {
		toggleShowMore: (state, action) => {
			state.showAmount += 7;
		}, 
		toggleShowLess: (state, action) =>{
			state.showAmount = 7;
		},
		switchPage: (state, action) => {
			state.activePage = action.payload;
			state.isFiltred = state.activePage === 0 ? false : true;
		},
		filterTransactions: (state, action) => {
			if(state.activePage === 1){
				state.filtredTransactions = state.transactions.filter(item => item.amount > 0);
			}else if(state.activePage === 2){
				state.filtredTransactions = state.transactions.filter(item => item.amount < 0);
			}
		},
		addTransaction: (state, action) =>{
			const id = nanoid();
			state.transactions.push({...action.payload, id});
			console.log(state.transactions)
		}
	},
	extraReducers: (builder) =>{
		builder
			.addCase(fetchTransactions.fulfilled, (state, action) => {
				state.transactions = action.payload;
				console.log('done');
			})
			.addCase(fetchTransactions.pending, (state, action) => {
				console.log('loading');
			})
			.addCase(fetchTransactions.rejected, (state, action) => {
				state.transactions = []
				console.error('error fetch');
			})
	}
	
});

export const {toggleShowMore, switchPage, filterTransactions, toggleShowLess, addTransaction} = transactionsSlice.actions;

export default transactionsSlice.reducer;