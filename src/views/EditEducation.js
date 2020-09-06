import React from 'react';
import { useDispatch,useSelector } from "react-redux";
import '../style/Modal.scss';
import {editEdu} from '../store/actions/user';



export default function EditEducation(props) {
    const {modalOpen,setModalEduOpen} = props
    const dispatch = useDispatch();
    const defaultValue = {
        school_name: "",
        graduation_time: "",
      }

      const submitEdu = async(e)=>{
        e.preventDefault()
        let data = new FormData();
        let school_name = document.getElementById('school').value;
        let time = document.getElementById('time').value;
        data.append('graduation_time',time)
        data.append('school_name',school_name)
        // if(school_name && time){
            // const res = await dispatch(editEdu(data))
            // setModalEduOpen(false);
        // }
        dispatch(editEdu(data))
        console.log("edit")
    }
      
    return (
        <div className="modal-wrapper">
            <div className="modal-inner">
                <h3>X</h3>
                <div className="container">
                    <form onSubmit={submitEdu}>
                        <label>School Name:</label>
                        <input
                        type="text"
                        id="school"
                        placeholder="school name"
                        />
                        <label>Graduation Time:</label>
                        <input
                        type="date"
                        id="time"
                        placeholder="2018-07-22"
                        />
                        <input
                        type="submit"
                        value="Update"/>
                    </form>
                </div>
            </div>
        </div>
    )
}
