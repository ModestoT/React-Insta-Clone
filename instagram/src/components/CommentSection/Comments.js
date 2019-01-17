import  React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import styled from 'styled-components';

const Comment = styled.div `
    display: flex;
    width: 100%;
`;

const UserName = styled.h2 `
    font-weight: bold;
`;

const CommentText = styled.p `
    padding-left: 1%;
    width: 100%;
`;

const DeleteComment = styled.button `
    opacity: 0;
    &:hover {
        opacity: 1;
        background: red;
        border: 1px solid red;
        border-radius: 3px;
        color: white;
        margin-left: 2%;
        width: 10%;
        height: 90%;
    }
`;

const TimeStamp = styled.p `
    border-bottom: 1px solid lightgrey;
    font-size: .8rem;
    color: darkgrey;
`;

const CommentBox = styled.input `
    border: none;
    font-size: .9rem;
    margin-top: 15px;
    height: 30px;
    width: 100%;
    padding-left: 1%;
`;

class Comments extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comments: props.comments,
            comment: ''
        };
    }

    handleInput = e => {
        this.setState({ comment: e.target.value });
    }

    addNewComment = (e) => {
        e.preventDefault();
        const newComment = { username: localStorage.getItem('User'), text: this.state.comment};
        const comments = this.state.comments.slice();

        comments.push(newComment);

        this.setState({comments: comments, comment: ''});

        setTimeout(() => {
            this.saveComments();
        }, 500);
    }

    deleteComment = id => {
        const comments = [...this.state.comments];
        const newComments = comments.slice(0, id);

        this.setState({comments: newComments});

        setTimeout(() => {
            this.saveComments();
        }, 500);

        // console.log(newComments);
    };

    componentDidMount() {
        const id = this.props.id;
        if (localStorage.getItem(id)) {
            this.setState({
                comments: JSON.parse(localStorage.getItem(this.props.id))
            });
        } else {
            this.saveComments();
        }
    }
    
    componenetWillUnmount() {
        this.saveComments();
    }

    saveComments = () => {
        localStorage.setItem(
          this.props.id,
          JSON.stringify(this.state.comments)
        );
    };

    render(){
        return (
            <div>
                {this.state.comments.map((comment, index) => {
                    return (
                        <Comment key ={index} id={index}>
                            <UserName>{comment.username}</UserName>
                            <CommentText>{comment.text}<DeleteComment id={index} onClick={() => this.deleteComment(index)}>Delete</DeleteComment></CommentText >
                        </Comment>
                    )
                })}
                <TimeStamp>{Moment(this.props.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow().toUpperCase()}</TimeStamp>
                <form onSubmit={this.addNewComment}>
                    <CommentBox
                        className="comment-box"
                        placeholder="Add a comment..."
                        value = {this.state.comment}
                        onChange={this.handleInput}/>
                </form>
            </div>
        );
    }
}

Comments.propTypes = {
    comments: PropTypes.arrayOf(
      PropTypes.shape({text: PropTypes.string, username: PropTypes.string})
    )
  };

export default Comments;