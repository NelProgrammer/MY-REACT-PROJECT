import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const saveExpenseInputDataHandler = (formInputExpenseData) => {
    const expenseInputData = {
      id: Math.floor(Math.random() * 100 - 1).toString(),
      ...formInputExpenseData,
    };

    console.log('In NewExpense.js');
    console.log(expenseInputData);
    props.onAddExpense(expenseInputData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseInputData={saveExpenseInputDataHandler} />
    </div>
  );
};

export default NewExpense;
