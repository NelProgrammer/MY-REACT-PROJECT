import React from 'react'; // You only need this for compatibility with old React Code
import './ExpensesDisplay.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from '../FilterLogic/ExpensesFilter';

const ExpensesDisplay = (props) => {
  const FilterYearData = (selectedYearFilterData) => {
    const yearFilterData = selectedYearFilterData;

    console.log('In ExpenseDisplay.js => ExpensesDisplay => FilterYearData');
    console.log('Year Filder Data:' + yearFilterData);
    console.log('Selected Year Filder Data:' + selectedYearFilterData);
  };
  return (
    <div>
      <ExpensesFilter onFilterYearData={FilterYearData} />

      <Card className="expenses">
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        />
      </Card>
    </div>
  );
};

export default ExpensesDisplay;
