import React, { Component } from 'react';
import Habits from './components/habits';
import Navbar from './components/navbar';
import './app.css';

class App extends Component {
  render() {
    return (
      <div>
        <Habits />
      </div>
    );
  }
}

export default App;
