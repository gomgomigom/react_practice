import React, { Component } from 'react';

class Add extends Component {
  render() {
    return (
      <div className='input'>
        <input
          type='text'
          className='input box'
          placeHolder='input your habit'
        />
        <button className='input__btn'>input</button>
      </div>
    );
  }
}

export default Add;
