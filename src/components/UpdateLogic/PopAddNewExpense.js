import React, { useState } from 'react';
import './PopAddNewExpense.css';
import NewExpense from './NewExpense';

const PopAddNewExpense = (props) => {
  const [expenses, setExpenses] = useState(props.expenses);

  const addExpenseHandler = (newExpenseItem) => {
    setExpenses((prevExpenses) => {
      return [newExpenseItem, ...prevExpenses];
    });
  };
  const showNewExpenseForm = () => {
    setDisplayComponent(() => <NewExpense onAddExpense={addExpenseHandler} />);
  };

  const [displayComponent, setDisplayComponent] = useState(() => (
    <button onClick={showNewExpenseForm}>Add New Expense</button>
  ));

  return <div className="popAddNewExpense">{displayComponent}</div>;
};

export default PopAddNewExpense;
