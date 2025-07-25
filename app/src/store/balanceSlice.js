import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
	balances: []
}

export const fetchBalances = createAsyncThunk(
	'balances/fetchbalances',
	async (state, action) => {
		const response = await fetch(`https://api.monobank.ua/personal/client-info`, {
			headers: {"X-token": API_KEY} 
		})
		const data = await response.json();

		return data;
	}
)

const balanceSlice = createSlice({
	name: 'balance',
	initialState,
	reducers: {
		addCard: (state, action)=>{
			state.balances.push(action.payload)
		}
	},
	extraReducers: (builder) => {
		builder
		.addCase(fetchBalances.fulfilled, (state, action) => {
			const accounts = action.payload.accounts;
			state.balances = accounts;
			state.balances = accounts.map(card => {
				const currency = card.currencyCode == 980 ? 'uah' :  card.currencyCode === 840 ? 'usd' : 'eur';
				const newObj = {
					balance: card.balance / 100,
					currency,
					cardNumber: card.maskedPan[0],
					type: card.type,
					fromApi: true
				}

				return newObj
			}); 
		})
		.addCase(fetchBalances.rejected, (state, action) => {
			console.log('error fetching transactions')
		})
	}
})


export default balanceSlice.reducer