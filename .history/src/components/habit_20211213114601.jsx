import React, { Component } from 'react';

class App extends Component {
  handleClick = (event) => {
    console.log(event);
  };

  render() {
    return <LikeButton title={'Like'} onClick={this.handleClick} />;
  }
}

class LikeButton extends Component {
  state = {
    numberOfLikes: 0,
  };
  render() {
    console.log(this.props);
    console.log(this.state);
    return <button>{this.state.numberOfLikes}</button>
  }

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
    return (
      <>
        <span className='habit-name'>Reading!!</span>
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
      </>
    );
  }
}

export default Habit;
