import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../ContextApi/GlobalProvider'
import Transaction from './Transaction'
function TransactionList() {
  const {transactions} = useContext(GlobalContext)

  return (
    <div className='transactionList'>
    <h3>History</h3>
    <hr/>
    <ul id='list' className='list'>
    {
      transactions.map((transaction)=>{
        return <Transaction transaction={transaction} key={transaction.id}/>

      })

    }
    </ul>
    </div>
  )
}

export default TransactionList