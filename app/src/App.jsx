import './App.css'
import './reset.scss';
import Sidebar from './components/sidebar/Sidebar';
import { Header } from './components/header/Header';
import Balance from './components/overview/balance/Balance';
import Goals from './components/overview/goals/Goals';
import UpcomingBill from './components/overview/bill/UpcomingBill';
import Overview from './pages/Overview';
import Balances from './pages/Balances';
import { BrowserRouter,Routes, Route } from 'react-router'
import Transactions from './pages/Transactions';
import ItemsPage from './pages/ItemsPage';
import CreateItem from './pages/CreateItem';
import DetailItemPage from './pages/DetailItemPage';

function App() {

  return (
    <BrowserRouter>
      <div className='container'>
        <Sidebar/>
        <div className="wrapper">
          <Header/>
          <main>
            <Routes>
              <Route path='/' element={<Overview/>}/>
              <Route path='/overview' element={<Overview/>}/>
              <Route path='/balances' element={<Balances/>}/>
              <Route path='/transactions' element={<Transactions/>}/>
              <Route path='/items' element={<ItemsPage/>}/>
              <Route path='/createitem' element={<CreateItem/>}/>
              <Route path='/items/:id' element={<DetailItemPage/>}></Route>
            </Routes>
          </main>
        </div>
      </div>
      
    </BrowserRouter>
  )
}

export default App
