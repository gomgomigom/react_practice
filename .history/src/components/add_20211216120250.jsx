import React, { memo, PureComponent } from 'react';


const Add = memo (props) => {
    const formRef = React.createRef();
    const inputRef = React.createRef();

    onSubmit = (event) => {
      event.preventDefault();
      const habitName = inputRef.current.value;
      habitName && props.onAdd(habitName);
      formRef.current.reset();
      // inputRef.current.value = '';
    };
  
      console.log('add');
      return (
        <form ref={formRef} onSubmit={onSubmit} className='input'>
          <input
            ref={inputRef}
            type='text'
            className='input box'
            placeholder='input your habit'
          />
          <button onClick={addHabit} className='input__btn'>
            Add
          </button>
        </form>
      );
    
}
      
  

export default Add;

