import React from 'react'; // You only need this for compatibility with old React Code
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">R{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
