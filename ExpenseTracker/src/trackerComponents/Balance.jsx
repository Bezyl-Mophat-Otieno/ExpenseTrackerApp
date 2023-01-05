import React from 'react'
import { GlobalContext } from '../ContextApi/GlobalProvider'
import { useContext } from 'react'
function Balance() {
  const { transactions} = useContext(GlobalContext)
  //an array of amounts
const amounts = transactions.map((transaction)=>{
  return transaction.amount
})

// Total amount from the array
const totalAmount = amounts.reduce((total,current)=>{
  return total+=current
},0)

  return (
    <div className='balance'>
        <h4> Your Balance </h4>
        <hr/>
        <h1 id='balance'>${totalAmount.toFixed(2)}</h1>
    </div>
  )
}

export default Balance