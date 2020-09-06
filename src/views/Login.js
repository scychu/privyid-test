import React from 'react'
import '../style/Register.scss';

export default function Login() {
    return (
        <div className="login_wrapper">
            <div className="login-form">
                <form>
                    <input
                    name="phone"
                    type="number"
                    placeholder="No. Hp"
                    />
                    <input
                    name="pass"
                    type="password"
                    placeholder="Password"
                    />
                    <input
                    type="submit"
                    value="LOGIN"/>
                </form>
            </div>
        </div>
    )
}
