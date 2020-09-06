import React from 'react'
import '../style/Register.scss';

export default function Register() {
    return (
        <div className="register_wrapper">
            <div className="register-form">
                <form>
                    <input
                    name="phone"
                    type="tel"
                    placeholder="No. Hp"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required
                    />
                    <input
                    name="pass"
                    type="password"
                    placeholder="Password"
                    />
                    <input
                    name="country"
                    type="text"
                    placeholder="Country"
                    />
                    <input
                    type="submit"
                    value="REGISTER"/>
                </form>
            </div>
        </div>
    )
}
