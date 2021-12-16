import React, { memo, PureComponent } from 'react';


const Add = memo (props) => {
    const formRef = React.createRef();
    const inputRef = React.createRef();

    onSubmit = (event) => {
      event.preventDefault();
      const habitName = inputRef.current.value;
      habitName && this.props.onAdd(habitName);
      this.formRef.current.reset();
      // this.inputRef.current.value = '';
    };
  
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
      
  

export default Add;

