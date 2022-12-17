import React from 'react';
import './App.css';

export default class count extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    };
    this.increase = this.increase.bind(this);
  }
  increase() {
    this.setState(state => ({
      count: state.count + 1
    }))
  }
  render() {
    return(
      <div>
        <button onClick={this.increase}>Increase</button>
        <h1>Счетчик: {this.state.count}</h1>
      </div>
    )
  }
}

