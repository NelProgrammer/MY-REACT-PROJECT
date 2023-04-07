import React, { useState } from 'react'; // You only need this for compatibility with old React Code
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  const [title, setChangeTitle] = useState(props.title);

  const clickChangeTitleHandler = () => {
    setChangeTitle(props.title + ' Updated via Hooks');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        {/* I had to change this from title to props.title to work.
            I imagine this needs some if statement to work as intended.*/}
        <h2>{props.title}</h2>
        <div className="expense-item__price">R{props.amount}</div>
      </div>
      <button onClick={clickChangeTitleHandler}> Change Title </button>
    </Card>
  );
};

export default ExpenseItem;
