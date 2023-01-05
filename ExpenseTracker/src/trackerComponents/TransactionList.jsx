import React from 'react'

function TransactionList() {
  return (
    <div className='transactionList'>
    <h3>History</h3>
    <hr/>
    <ul id='list' className='list'>
        <li className='minus'> Cash <span>-$400.00</span> <button className='delete-btn'>X</button></li>
    </ul>
    </div>
  )
}

export default TransactionList