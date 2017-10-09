import React, { Component } from 'react';
import Search from './Search';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyAOWE6IgAOOkBz9PdEknVoj2whAY6okVMw';

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
      videos: []
    };
  }
  //youtubeAPI
handleGetVideos(searchTerm){
    YTSearch({key: API_KEY, term: searchTerm}, (data) => {
    this.setState({videos: data});
  });
}

//InputChange
handleInputChange(key, event) {
  this.setState({[key]: event.target.value});
}

  render() {
    const { searchTerm } = this.state;

    console.log(this.state.videos);

    return (
      <div>
      <Search 
      onInptChange={this.handleInputChange.bind(this, 'searchTerm')}
      onBtnClick={this.handleGetVideos.bind(this, searchTerm)}
      value={searchTerm}
      />
      </div>
    );
  }
}

export default App;
