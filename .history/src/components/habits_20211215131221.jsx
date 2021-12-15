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

  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  deleteAll = () => {
    const habits = [...this.state.habits];
    habits.splice(0, habits.length);
    this.setState({ habits: habits });
  };

  render() {
    return (
      <>
        <Add onAdd={this.handleAdd} />
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
        <button onClick={this.props.deleteAll} className='reset__btn'>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
