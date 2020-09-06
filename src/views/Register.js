import React,{useState} from 'react'
import '../style/Register.scss';
import {useDispatch} from 'react-redux';
import {register} from '../store/actions/auth';

export default function Register() {
    const dispatch = useDispatch()
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e)=>{
        e.preventDefault();
        let data = new FormData();
        data.append('phone',phone)
        data.append('password',password)
        data.append('country',country)
        data.append('latlong',"-0.789275")
        data.append('device_token',"1")
        data.append('device_type',2)

        // const user = {
        //     phone,
        //     password,
        //     country,
        //     latlong:"-0.789275",
        //     device_token:"1",
        //     device_type:2
        // };
        await dispatch(register(data));
    }
    return (
        <div className="register_wrapper">
            <div className="register-form">
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
                    name="country"
                    type="text"
                    placeholder="Country"
                    value={country}
                    onChange={(e)=>setCountry(e.target.value)}
                    />
                    <input
                    type="submit"
                    value="REGISTER"/>
                </form>
            </div>
        </div>
    )
}
