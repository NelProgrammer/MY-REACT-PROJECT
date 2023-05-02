import React, { useState } from 'react';
import './ExpenseForm.css';
import PopAddNewExpense from './PopAddNewExpense';

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

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const formInputExpenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log('In Form.js');
    console.log(formInputExpenseData);
    props.onSaveExpenseInputData(formInputExpenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  const formCancelHandler = (event) => {
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

    return <PopAddNewExpense />;
  };

  return (
    <form onSubmit={formSubmitHandler}>
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
            min="2021-01-01"
            max="2023-03-24"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={formCancelHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
