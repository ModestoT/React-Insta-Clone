import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import Comments from './Comments';
import './CommentSection.css';

const Post = styled.div `
    border: 1px solid lightgrey;
    border-radius: 3px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 59%;
    margin-bottom: 25px;
`;

const Header = styled.div `
    display: flex;
    padding: 2%;
    align-items: center;
    border-bottom: 1px solid lightgrey;
    width: 100%;
`;

const UserProfilePic = styled.img `
    border-radius: 50%;
    width: 6%;
    height: 100%;
`;

const UserName = styled.h1 `
    font-weight: bold;
    padding-left: 2%;
`;

const PostPic = styled.img `
    width: 100%;
    height: 100%
`;


const CommentsSection = styled.div `
    padding: 2% 3%;
    width: 100%;
`;

const PostIcons = styled.div `
    display: flex;
    justify-content: space-between;
    font-size: 1.6rem;
    width: 10%;
`;

const Likes = styled.div `
    width: 100%;
    font-weight: bold;
`;

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
            <Post className="post-container">
                <Link to ={`posts/${this.props.postId}`}>
                    <Header>
                        <UserProfilePic src={this.props.post.thumbnailUrl} alt="Thumbnail"/>
                        <UserName>{this.props.post.username}</UserName>
                    </Header>
                    <PostPic src={this.props.post.imageUrl} alt="Post"/>
                </Link>
                <CommentsSection>
                    <PostIcons> 
                        <span onClick={this.adjustLikes}><i className="far fa-heart"></i></span>
                        <i className="far fa-comment"></i>
                    </PostIcons>
                        <Likes>{this.state.likes} likes</Likes>
                        <Comments comments={this.props.post.comments} id={this.props.post.imageUrl} timestamp={this.props.post.timestamp} postId={this.props.postId}/>
               </CommentsSection>
            </Post>
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