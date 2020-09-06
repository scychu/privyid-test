import '../style/Dashboard.scss';
import ava from '../style/ava.png';
import React from 'react'

export default function Dashboard() {
    return (
        <div className='dashboard-wrapper'>
            <div className="dashboard">
                <div className="profile-picture">
                    <img src={ava} alt="avatar"/>
                </div>
                <div className="profile-details">
                    <button>Edit Foto Profil</button>
                    <button>Edit Career Education</button>
                    <button>Send Message</button>
                </div>
            </div>
        </div>
    )
}
