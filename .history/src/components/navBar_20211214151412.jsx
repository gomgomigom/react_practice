import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <header>
        {' '}
        className='navbar'>
        <i class='fas fa-leaf navbar__title navbar__logo'></i>
        <span className='navbar__title'>Habit Tracker</span>
        <span className='navbar__count'>0</span>
      </header>
    );
  }
}

export default Navbar;
