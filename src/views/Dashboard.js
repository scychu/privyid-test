import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux';
import '../style/Dashboard.scss';
import {getUser} from '../store/actions/user';
import ava from '../style/ava.png';

export default function Dashboard() {
    const dispatch = useDispatch();
    const token = localStorage.getItem('access_token');
    useEffect(() => {
        dispatch(getUser(token));
       },[dispatch]);

    const deleteAccount =()=>{
        console.log("bye")
    }
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
                    <button>Logout</button>
                    <button onClick={deleteAccount}>Delete Account</button>
                </div>
            </div>
        </div>
    )
}
