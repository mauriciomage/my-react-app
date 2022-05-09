import React, { useState, useEffect } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import api from './api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

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
      toast.success("New Expense created!", {autoClose: 1500, pauseOnHover: false, draggable: false});
      getexpenses(); 
    });
  }

  const deleteExpenseHandler = async (expenseId) => {
    await confirmAlert({
      title: 'You are going to delete the expense. Are you sure?',
      message: '',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
              api.deleteExpenseById(expenseId).then(() => {
                toast.dark("Deleted!", { autoClose: 1500, pauseOnHover: false, draggable: false });
                getexpenses();
              });
          }
        },
        {
          label: 'No',
          onClick: () => {
            console.log('canceled');
          }
        }
      ]
    });
  }
 
  return (
    <div>
      <NewExpense 
        onAddExpense={addExpenseHandler}/>
      <Expenses 
        items={expenses}
        deleteExpense={deleteExpenseHandler}/>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />     
    </div>
  );
}

export default App;