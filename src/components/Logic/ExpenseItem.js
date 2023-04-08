import React, { useState } from 'react'; // You only need this for compatibility with old React Code
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [title, setChangeTitle] = useState(props.title);

  const clickChangeTitleHandler = (event) => {
    if (event.target.tagName === 'BUTTON') {
      let changeTitleTo = prompt('Replace ' + props.title);
      changeTitleTo =
        changeTitleTo === null || changeTitleTo === ''
          ? props.title
          : changeTitleTo;

      setChangeTitle(changeTitleTo); // The one problem is this doesnt send the data up the beanstalk to be updated.

      ///props.onSaveExpenseInputData(formInputExpenseData);
    }
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        {/* I had to change this from title to props.title to work.
            I imagine this needs some if statement to work as intended.*/}
        <h2>{title}</h2>
        <div className="expense-item__price">R{props.amount}</div>
      </div>
      <button onClick={clickChangeTitleHandler}> Change Title </button>
    </Card>
  );
};

export default ExpenseItem;
