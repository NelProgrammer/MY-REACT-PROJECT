import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
  let expensesContent =
    props.expensesItems.length === 0 ? (
      <h2 className="expenses-list_fallback">Found no expenses.</h2>
    ) : (
      <ul className="expenses-list">
        {props.expensesItems.map((expensesItem) => (
          <ExpenseItem
            key={expensesItem.id}
            title={expensesItem.title}
            amount={expensesItem.amount}
            date={expensesItem.date}
          />
        ))}
      </ul>
    );
  return expensesContent;
};

// const ExpensesList = (props) => {
//     if (props.expensesItems.length === 0) {
//       return <h2 className="expenses-list_fallback">Found no expenses.</h2>;
//     }
//     return (
//       <ul className="expenses-list">
//         {props.expensesItems.map((expensesSingleItem) => (
//           <ExpenseItem
//             key={expensesSingleItem.id}
//             title={expensesSingleItem.title}
//             amount={expensesSingleItem.amount}
//             date={expensesSingleItem.date}
//           />
//         ))}
//       </ul>
//     );
//   };

// const ExpensesList = (props) => {
//     let expensesContent = '';
//     const expensesContent = (expensesContent) =>
//     filteredExpenses.length > 0
//         ? (expensesContent = filteredExpenses.map((expensesItem) => (
//             <ExpenseItem
//             key={expensesItem.id}
//             title={expensesItem.title}
//             amount={expensesItem.amount}
//             date={expensesItem.date}
//             />
//         )))
//         : (expensesContent = <p className="error_msg">No Expenses Found</p>);

// }

export default ExpensesList;
