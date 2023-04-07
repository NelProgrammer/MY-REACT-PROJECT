import React, { useState } from 'react'; // You only need this for compatibility with old React Code
import './ExpensesDisplay.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from '../FilterLogic/ExpensesFilter';

const ExpensesDisplay = (props) => {
  const [yearChange, setYearChange] = useState('2022');
  // This Handler uses it's parameter to fetch data downrange
  const dropDownFilterChange = (selectedYearFilterData) => {
    setYearChange(selectedYearFilterData);
    console.log('ExpenseDisplay.js => ExpensesDisplay => dropDownFilterChange');
    console.log(' - Selected Year Filder Data:' + selectedYearFilterData);
    console.log(' - yearChange - after setHook:' + yearChange); // Data Copy is avaiable only on return/rerendeing not now and also available when you resend it down beanstalf
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={yearChange} // Data fetchhed downranged is now used
          // Created below Event/wormhole to send it down beanstalk to fetch component Data
          onFilterYearData={dropDownFilterChange}
        />
        <p>{yearChange}</p>
        {props.expenseItems.map((expensesItem) => (
          <ExpenseItem
            title={expensesItem.title}
            amount={expensesItem.amount}
            date={expensesItem.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default ExpensesDisplay;
