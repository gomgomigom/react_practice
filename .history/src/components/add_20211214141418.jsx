import React, { Component } from 'react';

class Add extends Component {
  addHabit = (input) => {};

  render() {
    return (
      <div className='input'>
        <input
          type='text'
          className='input box'
          placeHolder='input your habit'
        />
        <button onClick={this.addHabit} className='input__btn'>
          Add
        </button>
      </div>
    );
  }
}

export default Add;
