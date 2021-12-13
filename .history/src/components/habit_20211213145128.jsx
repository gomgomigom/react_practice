import React, { Component } from 'react';

class Habit extends Component {
  handleIncrement = () => {};

  handleDecrement = () => {};

  render() {
    console.log(this.props);
    const { name, count } = this.props.habit;
    return (
      <ul className='habit'>
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
        <button
          className='habit-button habit-delete'
          onClick={this.handleDelete}
        >
          <i className='fas fa-trash-alt'></i>
        </button>
      </ul>
    );
  }
}

export default Habit;
