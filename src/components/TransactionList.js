import React from 'react'

const TransactionList = () => {
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        <li className="minus">
            cash <span>-$400</span> <button className="delete-btn"></button>
        </li>
      </ul>
    </>
  )
}

export default TransactionList
