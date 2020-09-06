import React,{useState} from 'react'
import {useDispatch} from 'react-redux';
import {login} from '../store/actions/auth';

import '../style/Register.scss';

export default function Login() {
    const dispatch = useDispatch()
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const user = {
            phone,
            password,
            latlong:"-0.789275",
            device_token:"1",
            device_type:2
        };
        await dispatch(login(user));
    }
    return (
        <div className="login_wrapper">
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    <input
                    name="phone"
                    type="tel"
                    placeholder="No. Hp"
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                    />
                    <input
                    name="pass"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    <input
                    type="submit"
                    value="LOGIN"/>
                </form>
            </div>
        </div>
    )
}
