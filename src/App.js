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
    const { searchTerm, video } = this.state;

    return (
      <div>
      <Search 
      onInptChange={this.handleInputChange.bind(this, 'searchTerm')}
      onBtnClick={this.handleGetVideos.bind(this, searchTerm)}
      value={searchTerm}/>

      {videos.map((video, index) => {
        return (
          <div key={index}>
          <h3>{video.snippet.title}</h3>
          <img scr={video.snippet.thumbnails.medium.url} width="250" heigth="150" alt="sasa" />
          <p>{video.snippet.description} </p>
          </div>
          );
      })}
      </div>
    );
  }
}

export default App;
