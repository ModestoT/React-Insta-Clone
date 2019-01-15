import React from 'react';
import PropTypes from 'prop-types';
import Comments from './Comments';
import './CommentSection.css';

function CommentSection(props) {
    return (
        <div className="post-container">
            <div className="post-header">
                <img className="user-profile-pic"src={props.post.thumbnailUrl} alt="Thumbnail"/>
                <h1 className="post-username">{props.post.username}</h1>
            </div>
            <img className="user-post-pic"src={props.post.imageUrl} alt="Post"/>
            <div className="comments-section">
                <div className="post-icons"> 
                    <i className="far fa-heart"></i>
                    <i className="far fa-comment"></i>
                </div>
                    <p className="likes">{props.post.likes} likes</p>
                    <Comments comments={props.post.comments}/>
           </div>
        </div>
    )
}

CommentSection.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string.isRequired,
        likes: PropTypes.number,
        timestamp: PropTypes.string.isRequired,
        comments: PropTypes.array,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string
    })
};

export default CommentSection;