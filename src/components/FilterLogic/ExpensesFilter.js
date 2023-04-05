import React, { useState } from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const [yearChange, setYearChange] = useState('');
  console.log('0. In Expenses Filter.js => ExpensesFilter');
  console.log('YearChange before setState 0.1: ' + yearChange);

  const changeHandler = (event) => {
    // setYearChange(props.select.value);
    console.log('In Expenses Filter.js => ExpensesFilter => changeHandler');
    console.log('1. Before SetYearChange');
    console.log('YearChange 1.1: ' + yearChange);
    console.log('ev.tar.val 1.2: ' + event.target.value);
    console.log('YearChange 1.3: ' + yearChange);

    setYearChange(event.target.value);
    console.log('In Expenses Filter.js => ExpensesFilter => changeHandler');
    console.log('2. After SetYearChange');
    console.log('YearChange 2.1: ' + yearChange);
    console.log('ev.tar.val: 2.2: ' + event.target.value);
    console.log('YearChange 2.3: ' + yearChange);
    const yearFilter = yearChange;
    console.log('YearFilter 2.4: ' + yearFilter);

    props.onFilterYearData(event.target.value);
    console.log('In Expenses Filter.js => ExpensesFilter => changeHandler');
    console.log('3. After props.onFilterYearData');
    console.log('YearChange 3.1: ' + yearChange);
    console.log('ev.tar.val: 3.2: ' + event.target.value);
    console.log('YearChange 3.3: ' + yearChange);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={yearChange} onChange={changeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
