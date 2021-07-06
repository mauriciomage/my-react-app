import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData
    };
    props.onAddExpense(expenseData);
  }

  const formDataFill = (data) => {
    console.log(data);
  }

  return <div className="new-expense">
    <ExpenseForm 
      onSaveExpenseData={saveExpenseDataHandler}
      onFormDataFill={formDataFill}
    />
  </div>
}

export default NewExpense;