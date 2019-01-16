import React from 'react';

const authenticate = App => LoginPage => 
    class extends React.Component {
        constructor(){
            super();
            this.state = {
                loggedIn: ''
            }
        }

        componentDidMount() {
            if(localStorage.getItem('User')){
                this.setState({loggedIn: true});
            }
            this.setState({loggedIn: false});
            console.log(localStorage.getItem('User'))
        }

        render(){
            if(this.state.loggedIn === true){
                return <App />
            } else {
            return <LoginPage />
        }
        }
    };


export default authenticate;