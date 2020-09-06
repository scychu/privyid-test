import axios from 'axios';
import * as type from "./types";
const URL = "https://cors-anywhere.herokuapp.com/http://pretest-qa.dcidev.id/api/v1/"

export const register = (data) => async (dispatch) => {
    return axios({
        origin:"*",
        method:"POST",
        url:`${URL}register`,
        data,
    })
    .then((res)=>{
        console.log(res);
        alert("Register Success! Check phone for OTP");
        console.log(data)
        localStorage.setItem('phone',data.phone)
        window.location = "/verification"
        return true
    })
    .catch((error)=>{
        console.log(error.message);
        // alert("Register failed!");
        return false
    })
};

export const login = (data) => async (dispatch) => {
    return axios({
        origin:"*",
        method:"POST",
        url:`${URL}oauth/sign_in`,
        data
    })
    .then((res)=>{
        // console.log(res)
        alert("Login Success!");
        localStorage.setItem('phone',data.phone)
        localStorage.setItem('access_token',res.data.data.user.access_token)
        window.location = "/dashboard"
        dispatch({
            type:type.LOGIN_SUCCESS,
            data:res.data.data.user
        })
        // return axios({
        //     method: "POST",
        //     url:`${URL}register/otp/request`,
        //     data
        //   })
        return true
    })
    .catch((err)=>{
        console.log("err",err)
        alert("Login failed!");
        return false
    })
}


export const verificationRequest = (data) => async (dispatch) =>{
    return (dispatch) => {
        axios({
          method: "POST",
          url:`${URL}register/otp/request`,
          data
        })
        .then((res) => {
          console.log("aaa",res)
          
        })
        .catch((err) => {
          console.log(err, "ERROR");
        });
      };
}
export const verificationMatch = (data) => async (dispatch) =>{
    return (dispatch) => {
        axios({
          method: "POST",
          url:`${URL}register/otp/match`,
          data
        })
        .then((res) => {
          console.log(res)
          
        })
        .catch((err) => {
          console.log(err, "ERROR");
        });
      };
}