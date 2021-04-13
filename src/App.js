import React, { Component } from 'react';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <h1>I'm a React App</h1>
        <p>This is really working!</p>
        <ExpenseItem></ExpenseItem>
      </div>
    );
  }
}

export default App;