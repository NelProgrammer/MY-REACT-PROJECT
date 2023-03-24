import React, { useState } from 'react'; // You only need this for compatibility with old React Code
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle(props.title + ' Updated via Hooks');
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">R{props.amount}</div>
      </div>
      <button onClick={clickHandler}> Change Title </button>
    </Card>
  );
};

export default ExpenseItem;
