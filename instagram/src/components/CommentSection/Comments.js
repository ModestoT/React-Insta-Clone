import  React from 'react';
import Moment from 'moment';

class Comments extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentComments: props.comments,
            comment: ''
        };
    }
    render(){
        return (
            <div>
                {this.state.currentComments.map((comment, index) => {
                    return (
                        <div key ={index} className="comments">
                            <h2 className="comment-username">{comment.username}</h2>
                            <p className="comment-text">{comment.text}</p>
                        </div>
                    )
                })}
                <p className="timestamp">{Moment().startOf('day').fromNow().toUpperCase()}</p>
                <input
                    className="comment-box"
                    placeholder="Add a comment..."
                    
                    onClick={(e) => console.log(e.target)}/>
            </div>
        );
    }
}

export default Comments;