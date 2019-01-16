import React from 'react';

import './Login.css';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleLogin = e => {
        this.setState({[e.target.name] : e.target.value});
    }
    
    login = e => {
        const user = this.state.username;

        localStorage.setItem('User', user)
    }

    render() {
        return (
            <div className="login-container">
                <form className="login-form">
                    <h1>Insta Clone</h1>
                    <p>Login and see photos from your friends!</p>
                    <input 
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleLogin}/>
                    <input 
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleLogin}/>
                    <button onClick={this.login}>Login</button>
                </form>
            </div>
        );
    }
}

export default Login;