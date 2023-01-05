import './App.css'
import './index.css'
import Header from './trackerComponents/Header';
import Balance from './trackerComponents/Balance';
import IncomeExpense from './trackerComponents/IncomeExpense';
import TransactionList from './trackerComponents/TransactionList';
import AddTransaction from './trackerComponents/AddTransaction';
import GlobalProvider from './ContextApi/GlobalProvider';
function App() {
 return (
  <GlobalProvider>
  <div >
<div className='container'>
<Header/>
<Balance/>
<IncomeExpense/>
<TransactionList/>
<AddTransaction/>
</div>
</div>
  </GlobalProvider>
 )
}


export default App;

