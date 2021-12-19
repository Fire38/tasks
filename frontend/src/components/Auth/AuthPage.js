import React, { Component } from 'react';
import LoginForm from './AuthComponents/LoginForm';
import SignupForm from './AuthComponents/SignupForm';

import { connect } from 'react-redux';


class AuthPage extends React.Component {
    render(){
        let form;
        switch (this.props.userReducer.displayForm){
            case 'login':
                form = <LoginForm />
                break;
            case 'signup':
                form = <SignupForm />
                break;
            default:
                form = null
        }

        return (
            <div className="row h-100 justify-content-center align-items-center loginScreen" id='"loginScreen'>
                { form }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userReducer: state.userReducer
})

export default connect(mapStateToProps)(AuthPage);