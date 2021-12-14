import React, { Component } from 'react';
import Habits from './components/habits';
import Navbar from './components/navbar';
import './app.css';
import Add from './components/add';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  render() {
    return (
      <div>
        <Navbar />
        <Add />
        <Habits />
      </div>
    );
  }
}

export default App;
