import React, { Component } from 'react';
import LoginForm from './AuthComponents/LoginForm';
import SignupForm from './AuthComponents/SignupForm';


class AuthPage extends React.Component {
    render(){
        return (
            <div>
                <LoginForm />
                <SignupForm />
            </div>
        )
    }
}

export default AuthPage;