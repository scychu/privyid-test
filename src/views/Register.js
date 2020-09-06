import React from 'react'

export default function Register() {
    return (
        <div className="register_wrapper">
            <div>
                <form>
                    <input
                    name="phone"
                    />
                    <input
                    name="pass"
                    />
                    <input
                    name="country"
                    />
                    <button>REGISTER</button>
                </form>
            </div>
        </div>
    )
}
