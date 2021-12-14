import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  handleIncrement = (habit) => {
    console.log(`handleIncrement ${habit.name}`);
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = (habit) => {
    console.log(`handleDecrement ${habit.name}`);
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = (habit) => {
    console.log(`handleDelete ${habit.name}`);
    this.props.onDelete(this.props.habit);
  };

  deleteAll = () => {
    const habits = [...this.state.habits];
    habits.splice(0, habits.length);
    this.setState({ habits: habits });
  };

  render() {
    return (
      <ul>
        {this.props.habits.map((this.props.habit) => (
          <Habit
            key={this.props.key}
            habit={this.props.habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
        <button onClick={this.deleteAll} className='reset__btn'>
          Reset All
        </button>
      </ul>
    );
  }
}

export default Habits;
