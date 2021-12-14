import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <span className='navbar__title'>Habit Tracker</span>
        <span className='navbar__count'>0</span>
      </div>
    );
  }
}

export default Navbar;
