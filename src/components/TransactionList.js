import React from 'react'

const TransactionList = () => {
  return (
    <>
      <h3>History</h3>
      <ul id="list" class="list">
        <li class="minus">
            cash <span>-$400</span> <button class="delete-btn"></button>
        </li>
      </ul>
    </>
  )
}

export default TransactionList