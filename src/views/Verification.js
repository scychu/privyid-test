import React,{useEffect,useState} from 'react'
import '../style/Verification.scss';
import {useDispatch} from 'react-redux';

import {verificationRequest} from '../store/actions/auth';

export default function Verification() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(verificationRequest());
       },[dispatch]);
    

    return (
        <div className="verfication_wrapper">
            <div className="verfication-form">
                <form>
                    <input
                    type="text"
                    placeholder="-"
                    />
                    <input
                    type="text"
                    placeholder="-"
                    />
                    <input
                    type="text"
                    placeholder="-"
                    />
                    <input
                    type="text"
                    placeholder="-"
                    />  
                    <input
                    type="submit"
                    value="Verifikasi"
                    />
                </form>        
                    <a href="#">Kirim ulang kode verifikasi</a>
            </div>
        </div>
    )
}
