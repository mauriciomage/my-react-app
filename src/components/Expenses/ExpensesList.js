import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = props => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  }

  return <ul className="expenses-list">
    {props.items.length > 0 ? props.items.map((expense) => (
      <ExpenseItem 
        key={expense._id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        id={expense._id}
        deleteExpense={props.deleteExpense}
        editExpense={props.editExpense}
      />
    )): null }
  </ul>
};

export default ExpensesList;