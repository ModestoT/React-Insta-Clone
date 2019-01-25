import React, { Component } from 'react';
import { Route } from "react-router-dom";

import dummydata from './dummy-data';
import PostPage from './components/PostContainer/PostPage';
import authenticate from './authentication/authenticate';
import Login from './components/Login/Login';
import SinglePost from './components/PostContainer/SinglePost';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      postData : []
    };
  }

  componentWillMount() {
    this.setState({postData: dummydata});
  }
  
  render() {
    return (
      <div className="App">
        {/* <Switch> */}
           <Route exact path="/" component={ConditionalView} />
           <Route path="/posts/:postId" render={props => <SinglePost {...props} postData={this.state.postData}/>} />
        {/* </Switch> */}
        
        {/* <ConditionalView /> */}
      </div>
    );
  }
}

const ConditionalView = authenticate(PostPage)(Login);

export default App;
