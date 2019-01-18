import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import PostPage from './components/PostContainer/PostPage';
import authenticate from './authentication/authenticate';
import Login from './components/Login/Login';
import CommentSection from './components/CommentSection/CommentSection';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      
    };
  }

  
  render() {
    return (
      <div className="App">
        <Switch>
           <Route exact path="/" component={ConditionalView} />
           <Route path="/posts/:postId" component={CommentSection} />
        </Switch>
        
        {/* <ConditionalView /> */}
      </div>
    );
  }
}

const ConditionalView = authenticate(PostPage)(Login);

export default App;
