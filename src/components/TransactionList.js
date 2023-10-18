import React from 'react'

const TransactionList = ({ transactions }) => {
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <li className={transaction.amount < 0 ? 'minus' : 'plus'} key={transaction.id}>
            {transaction.text} <span>{transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}</span>
            <button className="delete-btn"></button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TransactionList;