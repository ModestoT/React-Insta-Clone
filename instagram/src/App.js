import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      dataArray: dummyData
    };
  }
  
  render() {
    return (
      <div className="App">
        <PostContainer postData={this.state.dataArray}/>
      </div>
    );
  }
}

export default App;
