import './ExpenseItem.css';

function ExpenseItem(props) {
  const expYear = props.date.getFullYear();
  const expMonth = props.date.toLocaleString('en-SA', { month: 'long' });
  const expDay = props.date.toLocaleString('en-SA', { day: '2-digit' });
  const expDate = expDay + ' ' + expMonth + ' ' + expYear;

  return (
    <div className="expense-item">
      <div className="expense-item__date">{expDate}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">R{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
