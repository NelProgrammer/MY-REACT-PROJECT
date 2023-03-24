import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  //   You can chose between individual state or agreegated.
  const [enteredTitle, setEnteredTitle] = useState(''); // Start with no values
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [enteredFormData, setEnteredFormData] = useState('');
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     setEnteredAmount: '',
  //     setEnteredDate: '',
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({ ...userInput, enteredTitle: event.target.value }); /// Destruction is to retain other state values ...userInput
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({ ...userInput, setEnteredAmount: event.target.value });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({ ...userInput, setEnteredDate: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2023-03-24"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
