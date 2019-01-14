import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

function PostContainer(props){
    return (
        <div className="posts-container">
            {props.postData.map((post, index) => {
                return <CommentSection post={post} key={index}/>
            })};
        </div>
    );
}

export default PostContainer;