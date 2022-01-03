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
            <div className='col-10 col-lg-3'>
                <AuthButtons />
                <form method='POST' onSubmit={this.handleSubmit}>
                    <input type='text'
                            name='username'
                            className='form-control mb-2'
                            placeholder='Введите имя пользователя'
                            value={this.state.username}
                            onChange={this.handleChange}
                    />
                    <input type='password'
                            name='password'
                            className='form-control mb-2'
                            placeholder='Введите пароль'
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    <input type='submit' className='btn btn-primary bg-success w-100 fw-bold' value='Войти' />
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