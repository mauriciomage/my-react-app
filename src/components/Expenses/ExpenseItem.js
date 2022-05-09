import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from'./ExpenseDate';
import Card from '../UI/Card'
import { Icon } from '@material-ui/core';

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <div className="expense-item__price">€{ props.amount }</div>
        <h2>{props.title}</h2>
      </div>
      <ExpenseDate date={props.date} />
      {/* <button className="expense-item__button" onClick={() => props.deleteExpense(props.id)}>
        Remove
      </button> */}
    </Card>
  );
}

export default ExpenseItem;