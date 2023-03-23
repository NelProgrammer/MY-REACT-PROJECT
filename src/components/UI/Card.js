import React from 'react'; // You only need this for compatibility with old React Code
import './Card.css';

function Card(props) {
  const classes = 'card ' + props.className; // Note the space after card.
  return <div className={classes}>{props.children}</div>;
}

export default Card;
