import React, { Component } from 'react';

class Add extends Component {
  inputRef = React.createRef();
  onSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
    console.log(event);
    console.log(this.inputRef.current.value);
    const habitName = this.inputRef.current.value;
    const habitCount = 0;
    this.props.addHabit(id, habitName, habitCount);
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
