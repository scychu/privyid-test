import axios from 'axios';
import * as type from "./types";

const URL = "https://cors-anywhere.herokuapp.com/http://pretest-qa.dcidev.id/api/v1/"

export const getUser = (data) => async (dispatch) => {
    return axios({
        method:"GET",
        url:`${URL}oauth/credentials?access_token=${data}`
    })
    .then((res)=>{
        console.log('ok')
        console.log(res.data.data.user)
        dispatch({
            type:type.GET_USER,
            user:res.data.data.user
        })
        return true
    })
    .catch((err)=>{
        console.log('oh no')
        return false
    })
}

export const editEdu = (data) => async (dispatch) => {
    let token = localStorage.getItem('access_token');
    return axios({
        method:"POST",
        url:`${URL}/profile/education`,
        data,
        headers:{
            Authorization:token
        }
    })
    .then((res)=>{
        console.log('ok')
        // console.log(res.data)
        dispatch({
            type:type.EDIT_EDU,
            user:res.data.data.user
        })
        return true
    })
    .catch((err)=>{
        console.log('oh no')
        return false
    })
}