import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <i class='fas fa-leaf navbar__title'></i>
        <span className='navbar__title'>Habit Tracker</span>
        <span className='navbar__count'>0</span>
      </div>
    );
  }
}

export default Navbar;
