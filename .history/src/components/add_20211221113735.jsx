import React, { PureComponent } from 'react';

class Add extends PureComponent {
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const habitName = this.inputRef.current.value;
    habitName && this.props.onAdd(habitName);
    this.formRef.current.reset();
    // inputRef.current.value = '';
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
        <button className='input__btn'>Add</button>
      </form>
    );
  }
}

export default Add;
