import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';

import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }
  
  let filteredExpenses = props.items;
  if (props.items.expenses) {
    filteredExpenses = props.items.expenses.filter( expense => {
      let newDate = new Date(expense.date);
      return newDate.getFullYear().toString() === filteredYear;
    })
  }

  return (
      <Card className="expenses">
        <ExpenseFilter 
        selected={filteredYear}
        onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList 
          items={filteredExpenses}
          deleteExpense={props.deleteExpense}
          editExpense={props.editExpense}
        />
      </Card>
  )
}

export default Expenses;