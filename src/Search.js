import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super();
    this.state = {
      count: 1
    };
  }

handleIncreaseCounter() {
  let { count } = this.state;//Диструктирізація
  // let counter = this.state.counter;
  ++count;
  this.setState({count});
}

  render() {
    return (
      <div>
      <p>{this.state.count}</p>
      <button onClick={this.handleIncreaseCounter.bind(this)}>УВЕЛИЧИТЬ</button>
      <input placeholder="Text here..." />
      </div>
    );
  }
}

export default Search;
