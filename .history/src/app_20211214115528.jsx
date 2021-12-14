import React, { Component } from 'react';
import Habits from './components/habits';
import Navbar from './components/navbar';
import './app.css';
import Add from './components/add';

class App extends Component {
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
