import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  console.log('In NewExpense.js');
  const [expenseInputData, setExpenseInputData] = useState();
  const saveExpenseInputDataHandler = (formInputExpenseData) => {
    setExpenseInputData((expenseInputData) => {
      if (
        (formInputExpenseData.title === '') |
        (formInputExpenseData.amount === '')
      ) {
        console.log('No Data to send');
      } else {
        expenseInputData = {
          id: Math.floor(Math.random() * 1000 - 1).toString(),
          ...formInputExpenseData,
        };
      }
      console.log(expenseInputData);
      props.onAddExpense(expenseInputData);
    });
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseInputData={saveExpenseInputDataHandler} />
    </div>
  );
};

export default NewExpense;
