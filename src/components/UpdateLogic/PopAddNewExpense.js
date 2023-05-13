import React, { useState } from 'react';
import './PopAddNewExpense.css';
import NewExpense from './NewExpense';
import App from '../../App';

const PopAddNewExpense = (props) => {
  const [expenses, setExpenses] = useState(props.expenseItems);
  //let mySetExpenses = {};

  const addExpenseHandler = (expenses) => {
    setExpenses(expenses);
    props.onAddNewExpense(expenses);
  };

  const hideNewExpenseForm = () => {
    setDisplayComponent(() => displayComponent);
    //setDisplayComponent(() => <label>Revert on Cancel Form</label>);
    //setDisplayComponent(() => <App onAddExpense={addExpenseHandler} />);
  };

  const showNewExpenseForm = () => {
    setDisplayComponent(() => (
      <NewExpense
        onAddExpense={addExpenseHandler}
        onHideExpense={hideNewExpenseForm}
      />
    ));
  };

  const [displayComponent, setDisplayComponent] = useState(() => (
    <button onClick={showNewExpenseForm}>Add New Expense</button>
  ));

  return <div className="popAddNewExpense">{displayComponent}</div>;
};

export default PopAddNewExpense;
