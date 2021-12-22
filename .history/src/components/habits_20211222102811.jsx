import React from 'react';
import Habit from './habit';
import Add from './add';

const Habits = ({
  habits,
  onIncrement,
  onDecrement,
  onDelete,
  onAdd,
  onReset,
}) => {
  return (
    <>
      <Add onAdd={onAdd} />
      <ul>
        {habits.map((habit) => (
          <Habit
            key={habit.key}
            habit={habit}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <button onClick={props.onReset} className='reset__btn'>
        Reset All
      </button>
    </>
  );
};

export default Habits;
