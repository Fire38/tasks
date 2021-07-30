import React from 'react';

class AuthButtons extends React.Component {
    render() {
        const logged_out = (
            <ul>
                <li>
                    <a>Вход</a>
                </li>
                <li>Регистрация</li>
            </ul>
        )
        
        return (
            <div>{ logged_out }</div>
        )
    }
}

export default AuthButtons