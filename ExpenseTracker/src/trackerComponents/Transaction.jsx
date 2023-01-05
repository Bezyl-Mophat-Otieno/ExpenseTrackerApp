import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../ContextApi/GlobalProvider'

function Transaction({transaction}) {
    const {deleteTransaction} = useContext(GlobalContext)
    const sign = transaction.amount < 0 ? '-' : '+'
  return (
    <li className={ sign ==='-' ?  'minus' : 'plus'} > {transaction.text} <span> {sign} ${Math.abs(transaction.amount)} </span> <button onClick={()=>deleteTransaction(transaction.id)} className='delete-btn'>X</button></li>
  )
}

export default Transaction