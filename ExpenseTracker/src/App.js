import './App.css'
import './index.css'
import Header from './trackerComponents/Header';
import Balance from './trackerComponents/Balance';
import IncomeExpense from './trackerComponents/IncomeExpense';
import TransactionList from './trackerComponents/TransactionList';
import AddTransaction from './trackerComponents/AddTransaction';
function App() {
 return (
  <div >
<div className='container'>
<Header/>
<Balance/>
<IncomeExpense/>
<TransactionList/>
<AddTransaction/>
</div>
</div>
 )
}


export default App;

