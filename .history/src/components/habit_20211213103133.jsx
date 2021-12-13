import React, { Component } from 'react';

class Habit extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <>
        <span className='habit-name'>Reading</span>
        <span className='habit-count'>8</span>
        <button className='habit-button habit-increase'>
          <i className='fas fa-plus-square'></i>
        </button>
        <button className='habit-button habit-decrease'>
          <i className='fas fa-minus-square'></i>
        </button>
        <button className='habit-button habit-delete'>
          <i className='fas fa-trash-alt'></i>
        </button>
      </>
    );
  }
}

export default Habit;
