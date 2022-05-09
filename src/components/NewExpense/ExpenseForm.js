import React, {useState} from 'react';
import Icon from '@material-ui/core/Icon';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  
  let d = new Date(),
  month = '' + (d.getMonth() + 1),
  day = '' + d.getDate(),
  year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;
  
  const now = [year, month, day].join('-');
  const [enteredDate, setEnteredDate] = useState(now);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    today = null;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    };

    props.onSaveExpenseData(expenseData)
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;

  return <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <Icon fontSize="large">article</Icon>
        <input type="text" onChange={titleChangeHandler} placeholder="Enter a description" value={enteredTitle} />
      </div>
      <div className="new-expense__control">
        <Icon fontSize="large">euro</Icon>
        <input type="number" min="0.01" step="0.01" placeholder="0,00" value={enteredAmount} onChange={amountChangeHandler} />
      </div>
      <div className="new-expense__control">
        <Icon fontSize="large">event</Icon>
        <input type="date" min="2021-04-14" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
      </div>
    </div>
    <div className="new-expense__actions">
      <button type="submit">Save</button>
    </div>
  </form>
}

export default ExpenseForm;