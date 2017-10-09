import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyAOWE6IgAOOkBz9PdEknVoj2whAY6okVMw';

class Search extends Component {
  constructor(props) {
    super();
    this.state = {
      searchTerm: ''
    };
  }

componentDidMount(){
  YTSearch({key: API_KEY, term: 'Хованский'}, (data) => {
    console.log(data);
  });
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
