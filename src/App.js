import React, { Component } from 'react';
import './App.css';
import AddTodo from './components/AddToDo/AddToDo';
import List from './components/List/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <List />
      </div>
    );
  }
}

export default App;
