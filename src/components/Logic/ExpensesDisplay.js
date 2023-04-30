import React, { useState } from 'react'; // You only need this for compatibility with old React Code
import './ExpensesDisplay.css';
//import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from '../FilterLogic/ExpensesFilter';
import ExpensesList from './ExpensesList';

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

  const filteredExpenses = props.expenseItems.filter((expItem) =>
    isFullYear(expItem.date, yearChange)
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={yearChange} // Data fetchhed downranged is now used
          // Created below Event/wormhole to send it down beanstalk to fetch component Data
          onFilterYearData={dropDownFilterChange}
        />
        <p>{yearChange}</p>
        <ExpensesList expensesItems={filteredExpenses} />
      </Card>
    </div>
  );
};

export default ExpensesDisplay;
