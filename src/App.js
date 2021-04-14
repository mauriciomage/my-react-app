import React, { Component } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

class App extends Component {
  expenses = [
    { id: 'e1', title: 'Car Insurance', amount: 256.98, date: new Date(2021, 3, 26) },
    { id: 'e2', title: 'Car Insurance', amount: 256.98, date: new Date(2021, 3, 25) },
    { id: 'e3', title: 'Car Insurance', amount: 256.98, date: new Date(2021, 3, 25) },
    { id: 'e4', title: 'Car Insurance', amount: 256.98, date: new Date(2021, 3, 25) }
  ]

  render() {
    return (
      <div>
        <NewExpense />
        <Expenses items={this.expenses} />
      </div>
    );
  }
}

export default App;