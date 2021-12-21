import React, { memo, PureComponent } from 'react';

const Habit = memo((props) => {
  const name = props.name;
  const count = props.count;
  const handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  const handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  const handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  return (
    <li className='habit'>
      <span className='habit-name'>{name}</span>
      <span className='habit-count'>{count}</span>
      <button
        className='habit-button habit-increase'
        onClick={this.handleIncrement}
      >
        <i className='fas fa-plus-square'></i>
      </button>
      <button
        className='habit-button habit-decrease'
        onClick={this.handleDecrement}
      >
        <i className='fas fa-minus-square'></i>
      </button>
      <button className='habit-button habit-delete' onClick={this.handleDelete}>
        <i className='fas fa-trash-alt'></i>
      </button>
    </li>
  );
});

export default Habit;
