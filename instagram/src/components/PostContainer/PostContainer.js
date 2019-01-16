import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';


function PostContainer (props){

        return (
            <div className="posts-container">
                {props.postData.map((post, index) => {
                    return <CommentSection post={post} key={index}/>
                })}
            </div>
        );
}

PostContainer.propTypes = {
    postData: PropTypes.array.isRequired,
    comments: PropTypes.array
};

export default PostContainer;