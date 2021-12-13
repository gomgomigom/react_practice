import React, { Component } from 'react';

class Habit extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    const count = this.state.count - 1;
    this.setState({ count: count < 0 ? 0 : count });
  };

  render() {
    console.log(this.props);
    return (
      <ul className='habit'>
        <span className='habit-name'>rea</span>
        <span className='habit-count'>{this.state.count}</span>
        <button
          className='habit-button habit-increase'
          onClick={this.handleIncrement}
        >
          <i className='fas fa-plus-square'></i>
        </button>
        <button
          className='habit-button habit-decrease'
          onClick={this.handleDecrement}
        >
          <i className='fas fa-minus-square'></i>
        </button>
        <button className='habit-button habit-delete'>
          <i className='fas fa-trash-alt'></i>
        </button>
      </ul>
    );
  }
}

export default Habit;
