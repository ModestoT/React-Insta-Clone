import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

function addNewComment(e, index) {
    
}
function PostContainer(props){
    return (
        <div className="posts-container">
            {props.postData.map((post, index) => {
                return <CommentSection post={post} key={index} comments={post.comments}/>
            })}
        </div>
    );
}

PostContainer.propTypes = {
    postData: PropTypes.array.isRequired
};

export default PostContainer;