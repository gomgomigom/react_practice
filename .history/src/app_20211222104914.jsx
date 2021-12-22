import React from 'react';
import Habits from './components/habits';
import Navbar from './components/navbar';
import './app.css';
import { v4 as uuid } from 'uuid';
import { useCallback } from 'react';
import { useState } from 'react';

const App = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: 'Reading', count: 0 },
    { id: 2, name: 'Running', count: 0 },
    { id: 3, name: 'Coding', count: 0 },
  ]);

  const handleIncrement = useCallback(habit => {
    setHabits(habits => habits.map(item => {
      if (item.id === habit.id) {
        return {...habit, count: habit.count+1};
      }
      return item;
    }));
  },[]);
  

  const handleDecrement = useCallback(habit => {
    setHabits(habits => habits.map(item => {
      if (item.id === habit.id) {
        const count = habit.count - 1;

        return { ...habit, count: count < 0 ? 0 : count};
      }
      return item;
    })
    );
  },[]);
  
  const handleDelete = useCallback(habit => {
    setHabits(habits => habits.filter(item => item.id !== habit.id));
  }, []);
  
  const handleAdd = useCallback(name => {
    setHabits(habits => [...habits, {id:uuid(), name, count:0}]);
  }, []);

  const handleReset = useCallback(() =>{
    setHabits(habits => habits.map(habit=>{
      if (habit.count !== 0){
        return {...habit, count: 0};
      }
      return habit;
    })
    );
  },[]);

  

    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
