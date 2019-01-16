import  React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

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
        const newComment = {text: this.state.comment, username: "BillyGachi"};
        const comments = this.state.comments.slice();

        comments.push(newComment);

        this.setState({comments: comments, comment: ''});

        setTimeout(() => {
            this.saveComments();
          }, 500);
    }

    componentDidMount() {
        const id = this.props.id;
        // console.log(localStorage.getItem(id))
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
                        <div key ={index} className="comments">
                            <h2 className="comment-username">{comment.username}</h2>
                            <p className="comment-text">{comment.text}<button className="delete-comment">delete</button></p>
                        </div>
                    )
                })}
                <p className="timestamp">{Moment().startOf('day').fromNow().toUpperCase()}</p>
                <form onSubmit={this.addNewComment}>
                    <input
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