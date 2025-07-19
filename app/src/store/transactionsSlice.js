import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = {
	transactions: [],
	filtredTransactions: [],
	isFiltred: false,
	activePage: 0,
	showAmount: 7
}
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
		test: (state, action) => {

		},
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

export const {test, toggleShowMore, switchPage, filterTransactions, toggleShowLess} = transactionsSlice.actions;

export default transactionsSlice.reducer;