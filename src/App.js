import React, { useState } from 'react'; // You only need this for compatibility with old React Code
import ExpensesDisplay from './components/Logic/ExpensesDisplay';
//import NewExpense from './components/UpdateLogic/NewExpense';
import PopAddNewExpense from './components/UpdateLogic/PopAddNewExpense';

const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = (props) => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addNewExpenseHandler = (newExpenseItem) => {
    setExpenses((prevExpenses) => {
      if (!newExpenseItem) {
        return prevExpenses;
      } else {
        prevExpenses = [newExpenseItem, ...prevExpenses];
        return prevExpenses;
      }
    });
  };

  return (
    <div>
      <PopAddNewExpense
        expenseItems={expenses}
        onAddNewExpense={addNewExpenseHandler}
      />
      <ExpensesDisplay expenseItems={expenses} />
    </div>
  );
};

export default App;
