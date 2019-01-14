import React, { Component } from 'react';
import dummyData from './dummy-data';
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
        <PostContainer postData={this.dataArray}/>
      </div>
    );
  }
}

export default App;
