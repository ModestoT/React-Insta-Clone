import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

function CommentSection(props) {
    return (
        <div className="post-container">
            <div className="post-header">
                <img className="user-profile-pic"src={props.post.thumbnailUrl} alt="Thumbnail"/>
                <h1 className="post-username">{props.post.username}</h1>
            </div>
            <img className="user-post-pic"src={props.post.imageUrl} alt="Post"/>
            <p className="likes">{props.post.likes} likes</p>
                {props.post.comments.map((comment, index) => {
                    return (
                        <div key ={index} className="comments">
                            <h2 className="comment-username">{comment.username}</h2>
                            <p className="comment-text">{comment.text}</p>
                        </div>
                    )
                })};
            <p className="timestamp">{props.post.timestamp}</p>
            <input
                placeholder="Add a comment..."/>
        </div>
    );
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