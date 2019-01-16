import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

const PostPage = props => {
    return <div>
            <SearchBar handleSearch={props.handleSearch} filterPost={props.filterPost}/>
            <PostContainer postData={props.postData} />
        </div>
};

export default PostPage;