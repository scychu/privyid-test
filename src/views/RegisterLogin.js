import React from 'react';
import Register from './Register';
import '../style/RegisterLogin.scss';
import Login from './Login';
import Verification from './Verification';

export default function RegisterLogin() {
    return (
        <div className="register-login_container">
            {/* <Register/>
            <Login/> */}
            <Verification/>
        </div>
    )
}
