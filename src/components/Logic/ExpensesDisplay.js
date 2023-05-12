import React, { useState } from 'react'; // You only need this for compatibility with old React Code
import './ExpensesDisplay.css';
//import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from '../FilterLogic/ExpensesFilter';
import ExpensesList from './ExpensesList';

const ExpensesDisplay = (props) => {
  const [filterOnYear, setFilterOnYear] = useState('All');
  // This Handler uses it's parameter to fetch data downrange
  const dropDownFilterChange = (selectedYearFilterData) => {
    setFilterOnYear(selectedYearFilterData);
  };
  //const getDateFullYear = (dateObj) => dateObj.getFullYear().toString();
  const isFullYear = (dataYear, filterYear) =>
    (filterYear === '') | !filterYear
      ? false
      : filterYear === 'All'
      ? true
      : dataYear.getFullYear().toString() === filterYear;

  const filteredExpenses = props.expenseItems.filter((expenseItem) =>
    isFullYear(expenseItem.date, filterOnYear)
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filterOnYear} // Data fetchhed downranged is now used
          // Created below Event/wormhole to send it down beanstalk to fetch component Data
          onFilterYearData={dropDownFilterChange}
        />
        <p>{filterOnYear}</p>
        <ExpensesList expensesItems={filteredExpenses} />
      </Card>
    </div>
  );
};

export default ExpensesDisplay;
