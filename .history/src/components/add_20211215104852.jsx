import React, { Component } from 'react';

class Add extends Component {
  onSubmit = (event) => {
    console.log('submit');
    console.log(eve);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className='input'>
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
