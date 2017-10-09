import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super();
    this.state = {
      searchTerm: ''
    };
  }

handleInputChange(key, event) {
  this.setState({[key]: event.target.value});
}

  render() {
    const { searchTerm } = this.state;
    return (
      <div>
      <p>{searchTerm} </p>
      <input 
      placeholder="Text here..."
      value={searchTerm}
      onChange={this.handleInputChange.bind(this, 'searchTerm')}
       />
      </div>
    );
  }
}

export default Search;
