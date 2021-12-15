import React, { Component } from 'react';

class Add extends Component {
  formRef = React.createRef();
  // inputRef = React.createRef();
  onSubmit = (event) => {
    event.preventDefault();
    const habitName = this.inputRef.current.value;
    habitName && this.props.onAdd(habitName);
    // this.inputRef.current.value = '';
    this.formRef.current.reset();
  };

  render() {
    return (
      <form ref={this.formRef} onSubmit={this.onSubmit} className='input'>
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
