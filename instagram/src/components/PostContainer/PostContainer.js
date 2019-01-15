import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';


class PostContainer extends Component {
    constructor(props){
        super(props);
        this.state= {
            comments:[]
        };
    }

    addNewComment(e, index) {
        console.log(e.target.parentNode.parentNode);
        console.log(index);
    }

    render() {
        return (
            <div className="posts-container">
                {this.props.postData.map((post, index) => {
                    return <CommentSection post={post} key={index} comments={post.comments} addNewComment={this.addNewComment}/>
                })}
            </div>
        );
    }
}

PostContainer.propTypes = {
    postData: PropTypes.array.isRequired,
    comments: PropTypes.array
};

export default PostContainer;