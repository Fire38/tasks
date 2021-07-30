import React from 'react';
import AuthButtons from './AuthButtons';


class SignupForm extends React.Component {
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

export default SignupForm;
