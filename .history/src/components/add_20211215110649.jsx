import React, { Component } from 'react';

class Add extends Component {
  inputRef = React.createRef();
  onSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
    console.log(event);
    console.log(this.inputRef.current.value);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className='input'>
        <input
          ref={this.inputRef}
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
