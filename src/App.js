import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Maximiliam', age: 28 },
      { name: 'Jhon', age: 25 },
      { name: 'Stephy', age: 26 },
    ],
    otherState: 'some other state',
    showPersons: false
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Jhon', age: 25 },
        { name: 'Stephy', age: 56 },
      ]
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 25 },
        { name: 'Stephy', age: 26 },
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
    console.log('estado del contenedor:', doesShow)
  }

  deletePersonHandler = (personId) => {
    const persons = [...this.state.persons];
    persons.splice(personId, 1);
    this.setState({persons: persons});
  }
  
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              key={index}
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} />
          })}
        </div> 
      );
    }

    return (
      <div className="App">
        <h1>I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>switch name mauri
        </button>
        {persons}
      </div>
    );
  }
}

export default App;