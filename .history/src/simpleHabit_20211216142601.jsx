import React from 'react';

const SimpleHabit = (props) => {
  state = {
    count: 0,
  };
  const [count, setCount] = useState(0);

  return (
    <li className='habit'>
      <span className='habit-name'>Reading</span>
      <span className='habit-count'>{this.state.count}</span>
      <button
        className='habit-button habit-increase'
        onClick={this.handleIncrement}
      >
        <i className='fas fa-plus-square'></i>
      </button>
    </li>
  );
};

export default SimpleHabit;

class SimpleHabit extends Component {
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {}
}
