import React from 'react'
import { GlobalContext } from '../ContextApi/GlobalProvider'
import { useContext } from 'react'

function IncomeExpense() {
  const {transactions} = useContext(GlobalContext)
const amounts = transactions.map((transaction)=>{
  return transaction.amount
})

const income = amounts.filter((amount)=>{
  return amount>0
}).reduce((total,current)=>{
  return total+=current
},0).toFixed(2)

const expense = amounts.filter((amount)=>{
  return amount<0
}).reduce((total,current)=>{
  return total+=current
},0)*-1


  return (
    <div  className='inc-exp-container'>
<div>
<h4>Income</h4>
<hr/>
<p id='money-plus' className='money-plus'>${income}</p>
</div>
<div>
<h4>Expense</h4>
<hr/>
<p id='money-minus' className='money-minus'>${expense.toFixed(2)}</p>
</div>

    </div>
  )
}

export default IncomeExpense