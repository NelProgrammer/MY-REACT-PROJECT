import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [editMode, setEditMode] = useState(false);

  const handleStartEdit = () => {
    setEditMode(true);
  };
  const handleEndEdit = () => {
    setEditMode(false);
  };

  const saveExpenseInputDataHandler = (formInputExpenseData) => {
    const expenseInputData = {
      id: Math.floor(Math.random() * 1000 - 1).toString(),
      ...formInputExpenseData,
    };

    console.log('In NewExpense.js');
    console.log(expenseInputData);
    props.onAddExpense(expenseInputData);
  };

  return (
    <div className="new-expense">
      {!editMode ? (
        <button type="button" onClick={handleStartEdit}>
          Add Expense
        </button>
      ) : (
        <ExpenseForm
          onSaveExpenseInputData={saveExpenseInputDataHandler}
          onClick={handleEndEdit}
        />
      )}
    </div>
  );
};

export default NewExpense;
