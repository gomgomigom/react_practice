import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  state = {
    habits: [{ name: 'Reading' }, { name: 'Running' }, { name: 'Coding' }],
  };
  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit name={habit.name} />
        ))}
      </ul>
    );
  }
}

export default Habits;
