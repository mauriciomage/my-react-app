import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Cuota La Salle', amount: 681, date: new Date(2021, 3, 14) },
  { id: 'e2', title: 'Mes Piso', amount: 450, date: new Date(2021, 3, 14) },
  { id: 'e3', title: 'Aguas', amount: 221.45, date: new Date(2020, 6, 3) },
  { id: 'e4', title: 'Municipalidad', amount: 1045.89, date: new Date(2020, 8, 1) }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;