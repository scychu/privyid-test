import React from 'react'
import '../style/Verification.scss';

export default function Verification() {
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
