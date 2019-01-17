import React from 'react';
import styled from 'styled-components';


const LoginContainer = styled.div `
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const LoginForm = styled.form `
    border: 1px solid darkgrey;
    width: 27%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
`;
const LoginHeader = styled.h1 `
    font-size: 2.8rem;
    font-family: 'Lobster', cursive;
`;

const LoginP = styled.p `
    font-family: Arial, sans-serif;
    margin: 5%;
`;

const LoginInput = styled.input `
    width: 50%;
    background: #FAFAFA;
    border: 1px solid lightgrey;
    border-radius: 3px;
    padding: 2%;
    margin-bottom: 6%;
`;

const LoginButton = styled.button `
    width: 50%;
    padding: 1%;
    background: dodgerblue;
    border: 1px solid dodgerblue;
    border-radius: 3px;
    color: white;
`;

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
        if(this.state.password.length < 3) {
            alert("Password must be atleast 3 characters long!");
        } else {
            localStorage.setItem('User', user)
        }
       
    }

    render() {
        return (
            <LoginContainer>
                <LoginForm>
                    <LoginHeader>Insta Clone</LoginHeader>
                    <LoginP>Login and see photos from your friends!</LoginP>
                    <LoginInput 
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleLogin}/>
                    <LoginInput 
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleLogin}/>
                    <LoginButton onClick={this.login}>Login</LoginButton>
                </LoginForm>
            </LoginContainer>
        );
    }
}

export default Login;