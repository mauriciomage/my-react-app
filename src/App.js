import React, { useState, useEffect } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import api from './api'

const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Cuota La Salle', amount: 681, date: new Date(2021, 3, 14) },
  { id: 'e2', title: 'Mes Piso', amount: 450, date: new Date(2021, 3, 14) },
  { id: 'e3', title: 'Aguas', amount: 22.45, date: new Date(2020, 6, 3) },
  { id: 'e4', title: 'Muni', amount: 1.89, date: new Date(2020, 8, 1) }
];



const App = () => {

  useEffect(() => {
    getexpenses();
  }, []);

  const [expenses, setExpenses] = useState({});

  const getexpenses = async () => {
    await api.getAllExpenses().then(expenses => {
      setExpenses({expenses: expenses.data.data})
    })
  }

  const addExpenseHandler = async (expense) => {
    await api.insertExpense(expense).then(res => {
      getexpenses(); 
    });
  }

  

  const deleteExpenseHandler = async (expenseId) => {
    await api.deleteExpenseById(expenseId).then(expense => {
      getexpenses();
    });
  }

  const editExpenseHandler = async (expense) => {
   //  console.log(expense);
  }


  return (
    <div>
      <NewExpense 
        onAddExpense={addExpenseHandler}
        onFormDataFill={editExpenseHandler} />
      <Expenses 
        items={expenses}
        deleteExpense={deleteExpenseHandler}
        editExpense={editExpenseHandler}/>
    </div>
  );
}

export default App;