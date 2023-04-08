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
  };
  const getDateFullYear = (dateObj) => dateObj.getFullYear().toString();
  const isFullYear = (dataYear, filterYear) =>
    (filterYear === '') | !filterYear
      ? true
      : getDateFullYear(dataYear) === filterYear;

  const filteredExpensesProps = props.expenseItems.filter((expItem) =>
    isFullYear(expItem.date, yearChange)
  );

  let expensesContent = '';
  const displayFGilteredExpenses = (expensesContent) =>
    filteredExpensesProps.length > 0
      ? (expensesContent = filteredExpensesProps.map((expensesItem) => (
          <ExpenseItem
            key={expensesItem.id}
            title={expensesItem.title}
            amount={expensesItem.amount}
            date={expensesItem.date}
          />
        )))
      : (expensesContent = <p className="error_msg">No Expenses Found</p>);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={yearChange} // Data fetchhed downranged is now used
          // Created below Event/wormhole to send it down beanstalk to fetch component Data
          onFilterYearData={dropDownFilterChange}
        />
        <p>{yearChange}</p>
        {displayFGilteredExpenses(expensesContent)}
      </Card>
    </div>
  );
};

export default ExpensesDisplay;
