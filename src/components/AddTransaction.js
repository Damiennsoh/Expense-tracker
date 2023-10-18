import React, { useState } from 'react';

const AddTransaction = () => {
  const [text, setText] = useState(''); // Initialize text state with an empty string
  const [amount, setAmount] = useState(0); // Initialize amount state with 0

  const handleTextChange = (e) => {
    setText(e.target.value); // Update text state when the input value changes
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value); // Update amount state when the input value changes
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Perform any necessary processing or data manipulation here, such as adding the transaction to the list

    setText(''); // Reset the text state to an empty string after submitting the form
    setAmount(0); // Reset the amount state to 0 after submitting the form
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={handleTextChange}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - Income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;