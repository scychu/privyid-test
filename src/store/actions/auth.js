import axios from 'axios';
import * as type from "./types";
const URL = "http://pretest-qa.dcidev.id/documentation/v1#/"

export const register = (data) => async (dispatch) => {
    return axios({
        method:"POST",
        url:`${URL}api/v1/register`,
        data
    })
    .then((res)=>{
        alert("Register Success!Check phone for OTP");
        console.log("then")
        localStorage.setItem('phone',data.phone)
        window.location = "/verification"
        return true
    })
    .catch((err)=>{
        console.log("err",err)
        alert("Register failed!");
        localStorage.setItem('phone',data.phone)
        window.location = "/verification"
        return false
    })
};

export const login = (data) => async (dispatch) => {
    return axios({
        method:"POST",
        url:`${URL}api/v1/oauth/sign_in`,
        data
    })
    .then((res)=>{
        alert("Login Success!");
        console.log("then")
        localStorage.setItem('phone',data.phone)
        window.location = "/dashboard"
        return true
    })
    .catch((err)=>{
        console.log("err",err)
        alert("Login failed!");
        localStorage.setItem('phone',data.phone)
        window.location = "/dashboard"

        return false
    })
}


export const verificationRequest = () => async (dispatch) => {
    let data = localStorage.getItem('phone')
    try {
        const res = await axios.post(`${URL}api/v1/register/otp/request`, data);
        if (res.status === 201) {
        //   alert("Register Success!", "Please Check your email to verify your account!");
        console.log("verif  done")
        window.location = "/dashboard"
        } 
        else if (res.status !== 201) {
          localStorage.removeItem("token", res.data.data.token)
          alert(`${res}`)
          console.log("failed")
        }
      } catch (err) {
        console.log(`${err}`)
      }
}