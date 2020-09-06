import React,{useEffect,useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import '../style/Dashboard.scss';
import {getUser} from '../store/actions/user';
import ava from '../style/ava.png';
import EditEducation from './EditEducation';

export default function Dashboard() {
    const dispatch = useDispatch();
    const token = localStorage.getItem('access_token');
    const user = useSelector(state => state.auth.user)

    useEffect(() => {
        dispatch(getUser(token));
       },[dispatch]);

    const deleteAccount =()=>{
        console.log("bye")
    }

    const [modalEduOpen, setModalEduOpen] = useState(false);
    const editEdu =()=>{
        setModalEduOpen(true);
        console.log("edit")
    }
    return (
        <div className='dashboard-wrapper'>
            <div className="dashboard">
                <div className="profile-picture">
                    <img src={ava} alt="avatar"/>
                </div>
                <div className="details">
                    {modalEduOpen? <EditEducation modalOpen={modalEduOpen} setModalEduOpen={setModalEduOpen}/>:""}
                    <div className="profile-details">
                        <h2>User-ID:{user.id}</h2>
                        <h2>Name:{user.name}</h2>
                        <h2>Hometown:{user.hometown}</h2>
                        <h2>Education:</h2>
                            <li>Graduation time: {user.graduation_time}</li>
                            <li>School Name: {user.school_name}</li>
                        <h2>Career:</h2>
                            {/* <li>Company name: {user.career}</li> */}
                            {/* <li>Start from: {user.career.starting_in}</li> */}
                            {/* <li>Until: {user.career.ending_in}</li> */}

                        <h2>Age:{user.age}</h2>
                        <h2>Bio:{user.bio}</h2>
                        <h2>Birthday:{user.birthday}</h2>
                        <h2>Gender:{user.gender}</h2>
                    </div>
                    <div className="edit-details">
                        <button>Edit Foto Profil</button>
                        <button onClick={editEdu}>Edit Education</button>
                        <button>Send Message</button>
                        <button>Logout</button>
                        <button onClick={deleteAccount}>Delete Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
