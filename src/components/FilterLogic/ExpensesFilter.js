import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const dropDownChangeHandler = (event) => {
    // Call an upstream function prop to send data up in its parameter.
    props.onFilterYearData(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year: {props.selectedYear}</label>
        <select value={props.selectedYear} onChange={dropDownChangeHandler}>
          <option value="All">All</option>
          <option value="2023">2023</option>
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

// const YearsFilterList = () => {
//   if (props.expensesItems.length === 0) {
//     return (
//       <div className="expenses-filter">
//         <div className="expenses-filter__control">
//           <label>Filter by year: {props.selectedYear}</label>
//           <select value={props.selectedYear} onChange={dropDownChangeHandler}>
//             <option value="All">All</option>;
//             <option value="---"> --- </option>;
//           </select>
//         </div>
//       </div>
//     );
//   } else {
//     return (
//       <div className="expenses-filter">
//         <div className="expenses-filter__control">
//           <label>Filter by year: {props.selectedYear}</label>
//           <select value={props.selectedYear} onChange={dropDownChangeHandler}>
//             <option value="All">All</option>;
//             {props.expensesItems.map((expensesSingleItem) => (
//               <option value={expensesSingleItem.date.getFullYear()}>
//                 {expensesSingleItem.date.getFullYear()}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>
//     );
//   }
// };
