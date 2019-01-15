import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      dataArray: [],
      filterPost: ''
    };
  }

  handleSearch = e => {
    this.setState({ filterPost: e.target.value, 
    }, () => {
      this.filterPost();
    });
  }

  filterPost = () => {
    const currentList = document.querySelectorAll('.post-container');
    const newList = Array.from(currentList);
    
    newList.forEach(post => {
      if(post.firstChild.textContent.indexOf(this.state.filterPost) === -1){
        post.classList.add('hide');
      } else {
        post.classList.remove('hide');
      }
    })
  }

  componentDidMount() {
    this.setState({dataArray: dummyData});    
  }
  
  render() {
    return (
      <div className="App">
        <SearchBar handleSearch={this.handleSearch} filterPost={this.state.filterPost}/>
        <PostContainer postData={this.state.dataArray} />
      </div>
    );
  }
}

export default App;
