import React from 'react';

const Login = props => {
    return (
        <form>
            <input 
                type="text"
                name="username"
                placeholder="username"
                value={props.username}
                onChange={props.handleLogin}/>
            <input 
                type="password"
                name="password"
                placeholder="password"
                value={props.password}
                onChange={props.handleLogin}/>
            <button onClick={props.login}>Login</button>
        </form>
    );
}

export default Login;