import React, { Component } from 'react';
import App from './App';
class Search extends Component {
  render() {
    const { onInptChange, onBtnClick, searchTerm } = this.props;

    return (
      <form onSubmit={onBtnClick}>
      <input
        placeholder="text here..."
        value={searchTerm}
        onChange={onInptChange}
      />

      <button type="submit">Click</button>
      </form>
    );
  }
}

export default Search;
