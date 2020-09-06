import axios from 'axios';
const URL = "https://cors-anywhere.herokuapp.com/http://pretest-qa.dcidev.id/api/v1/"

export const getUser = (data) => async (dispatch) => {
    return axios({
        method:"GET",
        url:`${URL}oauth/credentials?access_token=${data}`
    })
    .then((res)=>{
        console.log('ok')
        return true
    })
    .catch((err)=>{
        console.log('oh no')
        return false
    })
}