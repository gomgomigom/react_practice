import React, { Component } from 'react';

class Add extends Component {
  addHabit = (input) => {};

  render() {
    return (
      <form className='input'>
        <input
          type='text'
          className='input box'
          placeholder='input your habit'
        />
        <button onClick={this.addHabit} className='input__btn'>
          Add
        </button>
      </form>
    );
  }
}

export default Add;
