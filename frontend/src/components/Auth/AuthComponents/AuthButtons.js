import React from 'react';
import { connect } from 'react-redux';
import { displayForm } from '../../actions/userActions';


class AuthButtons extends React.Component {
    render() {
        const logged_out = (
            <ul className='nav nav-tabs justify-content-center'>
                <li className='nav-item' >
                    <a className='nav-link text-white fw-bold' id='authButtons' onClick={() => this.props.dispatch(displayForm('login'))}>Вход</a>
                </li>
                <li className='nav-item' id='authButtons'>
                    <a className='nav-link text-white fw-bold' id='authButtons' onClick={() => this.props.dispatch(displayForm('signup'))}>Регистрация</a>
                </li>
            </ul>
        )
        
        return (
            <div>{ logged_out }</div>
        )
    }
}


const mapStateToProps = state => ({
    userReducer: state.userReducer
})


export default  connect(mapStateToProps)(AuthButtons)