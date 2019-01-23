import React from 'react';

import CommentSection from '../CommentSection/CommentSection';

function SinglePost (props) {
    const item = props.postData.find(
        item => `${item.postId}` === props.match.params.postId
    );
    console.log(item);
    if(!item) return <h2>Opps!</h2>;
    return (
        <CommentSection post={item}/>
    );
}

export default SinglePost;