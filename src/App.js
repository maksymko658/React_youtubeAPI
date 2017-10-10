import React, { Component } from 'react';
import Search from './Search';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyAOWE6IgAOOkBz9PdEknVoj2whAY6okVMw';

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
      videos: [],
      selectedVideo: null
    };
  }
  //youtubeAPI
handleGetVideos(searchTerm, event){
  event.preventDefault();

    YTSearch({key: API_KEY, term: searchTerm}, (data) => {
    this.setState({videos: data});
    const video = data[0];
    const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;

    this.handleSelectVideo(videoUrl);

  });
}

//InputChange
handleInputChange(key, event) {
  this.setState({[key]: event.target.value});
}
  
handleSelectVideo(videoUrl){
  this.setState({selectedVideo: videoUrl})
}

  render() {
    const { searchTerm, videos, selectedVideo } = this.state;


    return (
      <div className="p3">
      <Search 
      onInptChange={this.handleInputChange.bind(this, 'searchTerm')}
      onBtnClick={this.handleGetVideos.bind(this, searchTerm)}
      value={searchTerm}/>


      <div className="clearfix">
        {selectedVideo ? (<div className="col col-6 py2">
        <iframe width="560" height="315" src={selectedVideo} frameborder="0" allowfullscreen></iframe></div>) : null}
              <div className="col col-4">

      {videos.map((video, index) => {
        const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;

        return (
          <div onClick={this.handleSelectVideo.bind(this, videoUrl)} key={index}>
          <h3>{video.snippet.title}</h3>
          <img src={video.snippet.thumbnails.medium.url} />
          <p>{video.snippet.description} </p>
          </div>
          );
      })}         
      </div>
    </div>
  </div>
    );
  }
}

export default App;
