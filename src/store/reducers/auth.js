import {
    LOGIN_SUCCESS,
    GET_USER,
    EDIT_EDU
  } from "../actions/types";
  // import state from "sweetalert/typings/modules/state";
  
  const initialState = {
    phone: localStorage.getItem("phone"),
    data:[],
    user:[]
  };
  
  
  const auth = (state = initialState, action) => {
    const {type,data,user,payload} = action;
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
      case EDIT_EDU: 
      return {
        ...state,
        data:payload
      }
    }
  };
  
  export default auth;
  