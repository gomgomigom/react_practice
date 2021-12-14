import React, { Component } from 'react';
import Habits from './components/habits';
import Navbar from './components/navbar';
import './app.css';
import Add from './components/add';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    console.log(`handleIncrement ${habit.name}`);
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits: habits });
  };

  handleDecrement = (habit) => {
    console.log(`handleDecrement ${habit.name}`);
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    console.log(index);
    console.log(habits);
    this.setState({ habits: habits });
  };

  handleDelete = (habit) => {
    console.log(`handleDelete ${habit.name}`);
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  deleteAll = () => {
    const habits = [...this.state.habits];
    habits.splice(0, habits.length);
    this.setState({ habits: habits });
  };

  render() {
    return (
      <div>
        <Navbar />
        <Add />
        {this.state.habits.map((habit) => (
          <Habits
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default App;
