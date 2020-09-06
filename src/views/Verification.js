import React,{useEffect} from 'react'
import '../style/Verification.scss';
import {useDispatch} from 'react-redux';
import {verificationRequest,verificationMatch} from '../store/actions/auth';

export default function Verification() {
    const phone = localStorage.getItem('phone')
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(verificationRequest(phone));
       },[dispatch]);

    const sendOTP = (e)=>{
        e.preventDefault()
        console.log("send")
        const data ={
            user_id:"",
            otp_code:""
        }
        dispatch(verificationMatch(data));
    }
    const resendOTP = (e)=>{
        e.preventDefault()

        console.log("resend")
    }

    return (
        <div className="verfication_wrapper">
            <div className="verfication-form">
                <form onSubmit={sendOTP}>
                    <input
                    type="text"
                    maxLength = "1"
                    placeholder="0"
                    />
                    <input
                    type="text"
                    maxLength = "1"
                    placeholder="0"
                    />
                    <input
                    type="text"
                    maxLength = "1"
                    placeholder="0"
                    />
                    <input
                    type="text"
                    maxLength = "1"
                    placeholder="0"
                    />
                    <input
                    type="submit"
                    value="Verifikasi"
                    />
                </form>        
                    <button onClick={resendOTP}>Kirim ulang kode verifikasi</button>
            </div>
        </div>
    )
}
