import React from 'react';

function CommentSection(props) {
    return (
        <div className="post-container">
            <img src={props.post.thumbnailUrl} alt="Thumbnail"/>
            <h1 className="post-username">{props.post.username}</h1>
            <img src={props.post.imageUrl} alt="Post"/>
            <p className="likes">{props.post.likes} likes</p>
                {props.post.comments.map((comment) => {
                    return (
                        <div className="comments">
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

export default CommentSection;