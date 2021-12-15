import React, { Component } from 'react';
import Habit from './habit';
import Add from './add';

class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };

  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  addHabit = (ref, name, count) => {
    this.props.onAdd(ref, name, count);
    console.log(ref, name, count);
  };

  render() {
    return (
      <>
        <Add addHabit={this.addHabit} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.key}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default Habits;
