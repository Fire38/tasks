import React from 'react';
import AuthButtons from './AuthButtons';
import { registerUser }  from '../../actions/userActions';
import { connect } from 'react-redux';

class SignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.dispatch(registerUser(this.state))
    }


    render(){
        return (
            <div>
                <AuthButtons />
                <form method='POST'>
                    <div>
                        <input type='text'
                                name='username'
                                placeholder='Введите имя пользователя' />
                        <input type='password'
                                name='password'
                                placeholder='Введите пароль' />
                        <input type='submit' value='Зарегистрироваться' />
                    </div>
                </form>
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        userReducer: state.userReducer
    }
}

export default connect(mapStateToProps)(SignupForm);
