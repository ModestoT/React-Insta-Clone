import React, { Component } from 'react';

import dummyData from './dummy-data';
import PostPage from './components/PostContainer/PostPage';
import authenticate from './authentication/authenticate';
import Login from './components/Login/Login';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      dataArray: [],
      filterPost: '',
      username: '',
      password: ''
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

  handleLogin = e => {
    this.setState({[e.target.name] : e.target.value});
  }

  login = e => {
    const user = this.state.username;

    localStorage.setItem('User', user)
  }

  componentDidMount() {
    this.setState({dataArray: dummyData});

  }
  
  render() {
    return (
      <div className="App">
        {/* <SearchBar handleSearch={this.handleSearch} filterPost={this.state.filterPost}/>
        <PostContainer postData={this.state.dataArray} /> */}
        {/* <Login handleLogin={this.handleLogin} login={this.login}/> */}
        <PostPage handleSearch={this.handleSearch} filterPost={this.state.filterPost} postData={this.state.dataArray}/>
      </div>
    );
  }
}

export default authenticate(App)(Login);
