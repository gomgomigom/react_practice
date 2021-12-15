import React, { Component } from 'react';

class Add extends Component {
  inputRef = React.createRef();
  onSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
    console.log(event);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className='input'>
        <input
          ref={inputRef}
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
b;

export default Add;
