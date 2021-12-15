import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <header className='navbar'>
        <i class='fas fa-leaf navbar__title navbar__logo'></i>
        <span className='navbar__title'>Habit Tacker</span>
        <span className='navbar__count'>{this.props.count}</span>
      </header>
    );
  }
}

export default Navbar;
