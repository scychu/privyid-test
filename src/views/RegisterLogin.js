import React from 'react';
import '../style/RegisterLogin.scss';
import Register from './Register';
import Login from './Login';
import Verification from './Verification';
import Dashboard from './Dashboard';

export default function RegisterLogin() {
    return (
        <div className="register-login_container">
            {/* <Register/>
            <Login/> 
            <Verification/> */}
            <Dashboard/>

        </div>
    )
}
