import React, { PureComponent } from 'react';

class Add extends PureComponent {
  formRef = React.createRef();
  inputRef = React.createRef();
  onSubmit = (event) => {
    event.preventDefault();
    const habitName = this.inputRef.current.value;
    habitName && this.props.onAdd(habitName);
    this.formRef.current.reset();
    // this.inputRef.current.value = '';
  };

  render() {
    console.log('add');
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
