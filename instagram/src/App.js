import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      dataArray: dummyData,
      comment: ''
    };
  }
  
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer postData={this.state.dataArray} />
      </div>
    );
  }
}

export default App;
