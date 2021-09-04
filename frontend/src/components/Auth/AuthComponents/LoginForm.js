import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/userActions';
import AuthButtons from './AuthButtons';



class LoginForm extends React.Component {
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
        this.props.dispatch(fetchUser(this.state))
    }

    render(){
        return (
            <div>
                <AuthButtons />
                <form method='POST' onSubmit={this.handleSubmit}>
                    <div>
                        <input type='text'
                                name='username'
                                placeholder='Введите имя пользователя'
                                value={this.state.username}
                                onChange={this.handleChange}
                        />
                        <input type='password'
                                name='password'
                                placeholder='Введите пароль'
                                value={this.state.password}
                                onChange={this.handleChange}
                         />
                        <input type='submit' value='Войти' />
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

export default connect(mapStateToProps)(LoginForm);