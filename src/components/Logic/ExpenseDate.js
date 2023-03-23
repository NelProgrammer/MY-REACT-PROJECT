import React from 'react'; // You only need this for compatibility with old React Code
import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString('en-SA', { month: 'long' });
  const day = props.date.toLocaleString('en-SA', { day: '2-digit' });
  // const expDate = expDay + ' ' + expMonth + ' ' + expYear;

  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
