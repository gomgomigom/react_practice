import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    console.log('navbar');
    return (
      <header className='navbar'>
        <i class='fas fa-leaf navbar__title navbar__logo'></i>
        <span className='navbar__title'>Habit Tracker</span>
        <span className='navbar__count'>{this.props.totalCount}</span>
      </header>
    );
  }
}

export default Navbar;
