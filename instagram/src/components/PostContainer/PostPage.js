import React from 'react';

import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

class PostPage extends React.Component {
    constructor(props){
        super(props);
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
    console.log(newList)
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
        <div>
            <SearchBar handleSearch={this.handleSearch} filterPost={this.state.filterPost}/>
            <PostContainer postData={this.state.dataArray} />
        </div>
      );
    }
};

export default PostPage;