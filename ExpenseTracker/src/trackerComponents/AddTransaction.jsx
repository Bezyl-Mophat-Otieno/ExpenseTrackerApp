import React from 'react'
import { useState } from 'react'
import TransactionList from './TransactionList';
import { GlobalContext } from '../ContextApi/GlobalProvider';
import { useContext } from 'react';
function AddTransaction() {
    const [text,setText] = useState('')
    const [amount,setAmount] = useState(0)
    const { addTransaction} = useContext(GlobalContext)

    const handleFormSubmit = (event)=>{
event.preventDefault()
const transaction = {
  id:Math.floor(Math.random()*1000),
  text:text,
  amount:parseInt(amount)//using + before a string also parses a string to an int ie +amount
}
addTransaction(transaction)

    }
  return (
    <section className='section'>
      <form className='form' onSubmit={handleFormSubmit} >
        <h5>Add Transaction</h5>
        <hr/>
        <div className='form-row'>
          <label htmlFor='text' className='form-label'>
            Text
          </label>
          <input
            type='text'
            className='form-input'
            id='text'
            placeholder='Enter Text'
            value={text}
            onChange={(e)=>setText(e.target.value)}

          />
        </div>
        <div className='form-row'>
          <label htmlFor='Amount' className='form-label'>
            Amount <br/> (negative - expense , Possitive - income )
          </label>
          <input
            type='number'
            className='form-input'
            id='Amount'
            placeholder='Enter Amount'
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          Add Transaction 
        </button>
      </form>
    </section>
  )
}

export default AddTransaction