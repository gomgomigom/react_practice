import React, { memo, PureComponent } from 'react';

const Add = (props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const habitName = inputRef.current.value;
    habitName && props.onAdd(habitName);
    formRef.current.reset();
    // inputRef.current.value = '';
  };

  return (
    <form ref={formRef} onSubmit={onSubmit} className='input'>
      <input
        ref={inputRef}
        type='text'
        className='input box'
        placeholder='input your habit'
      />
      <button className='input__btn'>Add</button>
    </form>
  );
};

export default Add;
