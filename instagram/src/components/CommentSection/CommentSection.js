import React from 'react';
import PropTypes from 'prop-types';

import Comments from './Comments';
import './CommentSection.css';

class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            likes: props.post.likes,
            liked: false
        };
    }

    adjustLikes = (e) => {
        let likes = this.state.likes +1;
        let unliked = this.state.likes -1;
        if(this.state.liked === false){
            this.setState({likes: likes, liked: !this.state.liked});
            e.target.classList.add('liked');
        } else {
            this.setState({likes: unliked, liked: !this.state.liked});
            e.target.classList.remove('liked');
        }
    };

    render() {
        return (
            <div className="post-container">
                <div className="post-header">
                    <img className="user-profile-pic"src={this.props.post.thumbnailUrl} alt="Thumbnail"/>
                    <h1 className="post-username">{this.props.post.username}</h1>
                </div>
                <img className="user-post-pic"src={this.props.post.imageUrl} alt="Post"/>
                <div className="comments-section">
                    <div className="post-icons"> 
                        <span onClick={this.adjustLikes}><i className="far fa-heart"></i></span>
                        <i className="far fa-comment"></i>
                    </div>
                        <p className="likes">{this.state.likes} likes</p>
                        <Comments comments={this.props.post.comments} id={this.props.post.imageUrl} timestamp={this.props.post.timestamp}/>
               </div>
            </div>
        )
    }
    
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