import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import transactionsReducer from './store/transactionsSlice.js'
import itemsReducer from './store/itemsSlice.js';
import balanceReducer from './store/balanceSlice.js'


const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    items: itemsReducer,
    balance: balanceReducer
  }
})

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
