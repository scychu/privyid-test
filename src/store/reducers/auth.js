import {
    LOGIN_SUCCESS,
    GET_USER
  } from "../actions/types";
  // import state from "sweetalert/typings/modules/state";
  
  const initialState = {
    phone: localStorage.getItem("phone"),
    data:[],
    user:[]
  };
  
  
  const auth = (state = initialState, action) => {
    const {type,data,user} = action;
    switch (type) {
      default:
        return {
          ...state,
        };
      case LOGIN_SUCCESS: 
          return {
            ...state,
            data:data
          }
      case GET_USER: 
      return {
        ...state,
        user:user
      }
    }
  };
  
  export default auth;
  