import React, { memo } from 'react';
import Habit from './habit';
import Add from './add';

const Habits = memo((props) => {
  const handleIncrement = (habit) => {
    props.onIncrement(habit);
  };

  const handleDecrement = (habit) => {
    props.onDecrement(habit);
  };

  const handleDelete = (habit) => {
    props.onDelete(habit);
  };

  const handleAdd = (name) => {
    props.onAdd(name);
  };
});
return (
  <>
    <Add onAdd={handleAdd} />
    <ul>
      {props.habits.map((habit) => (
        <Habit
          key={habit.key}
          habit={habit}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
        />
      ))}
    </ul>
    <button onClick={props.onReset} className='reset__btn'>
      Reset All
    </button>
  </>
);
export default Habits;
