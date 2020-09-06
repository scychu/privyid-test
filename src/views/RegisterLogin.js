import React from 'react';
import '../style/RegisterLogin.scss';
import Register from './Register';
import Login from './Login';

export default function RegisterLogin() {
    return (
        <div className="register-login_container">
            <Register/>
            <Login/>
        </div>
    )
}
