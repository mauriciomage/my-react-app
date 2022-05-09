import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpenseFilter from './ExpenseFilter';

import './Expenses.css';

const Expenses = (props) => {
  const date  = new Date();
  const month = date.getMonth();
  const [filteredMonth, setFilteredMonth] = useState(month);

  const filterChangeHandler = selectedMonth => {
    setFilteredMonth(selectedMonth)
  }
  
  let total = 0;
  const sumaryExpenses = expenses => {
    total = expenses.reduce((prev, cur) => {
      return prev + cur.amount;
    }, 0);
  }
  
  let filteredExpenses = props.items;
  if (props.items.expenses) {
    filteredExpenses = props.items.expenses.filter( expense => {
      let newDate = new Date(expense.date);
      return newDate.getMonth().toString() === filteredMonth.toString();
    });
    filteredExpenses.sort((a, b) => new Date(b.date) - new Date(a.date));
    sumaryExpenses(filteredExpenses);
  }
  

  return (
      <Card className="expenses">
        <ExpenseFilter 
        total={total}
        selected={filteredMonth}
        onChangeFilter={filterChangeHandler} />
        <ExpensesList 
          items={filteredExpenses}
          deleteExpense={props.deleteExpense}
          editExpense={props.editExpense}
        />
      </Card>
  )
}

export default Expenses;