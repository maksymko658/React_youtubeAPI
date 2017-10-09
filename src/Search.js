import React, { Component } from 'react';

class Search extends Component {
  render() {
    const { onInptChange, onBtnClick, searchTerm } = this.props;

    return (
      <div>
      <input
        placeholder="text here..."
        value={searchTerm}
        onChange={onInptChange}
      />

      <button onClick={onBtnClick}>Click</button>
      </div>
    );
  }
}

export default Search;
