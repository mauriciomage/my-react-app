import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const newDate = new Date(props.date);
  const month = newDate.toLocaleString('en-US', { month: '2-digit' } );
  const day = newDate.toLocaleString('en-US', {day: '2-digit'});
  const year = newDate.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}/{day}/{year}</div>
    </div>
  );
}

export default ExpenseDate;