import React from 'react'
import { useState } from 'react'
import TransactionList from './TransactionList';

function AddTransaction() {
    const [text,setText] = useState('')
    const [amount,setAmount] = useState(0)

    
  return (
    <section className='section'>
      <form className='form' >
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