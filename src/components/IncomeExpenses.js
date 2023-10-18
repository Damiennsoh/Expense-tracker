import React from 'react';

const IncomeExpenses = () => {
  const calculateBalance = (income, expenses) => {
    return income - expenses;
  };

  const income = 1000; // replace with your actual income value
  const expenses = 500; // replace with your actual expenses value
  const balance = calculateBalance(income, expenses);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income}.00</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${expenses}.00</p>
      </div>
      <div>
        <h4>Balance</h4>
        <p className="money">{balance >= 0 ? '+' : '-'}${Math.abs(balance)}.00</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;

