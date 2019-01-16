import React from 'react';

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
            <form>
                <input 
                    type="text"
                    name="username"
                    placeholder="username"
                    value={this.state.username}
                    onChange={this.handleLogin}/>
                <input 
                    type="password"
                    name="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.handleLogin}/>
                <button onClick={this.login}>Login</button>
            </form>
        );
    }
}

export default Login;