import React, { PureComponent } from 'react';
import Habit from './habit';
import Add from './add';

const Habits = memo((props) => {
  const handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };

  const handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  const handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  const handleAdd = (name) => {
    this.props.onAdd(name);
  };

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
      <button onClick={this.props.onReset} className='reset__btn'>
        Reset All
      </button>
    </>
  );
});

export default Habits;
