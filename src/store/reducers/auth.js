import {
    LOGIN_SUCCESS,
  } from "../actions/types";
  // import state from "sweetalert/typings/modules/state";
  
  const initialState = {
    phone: localStorage.getItem("phone"),
    user:[]
  };
  
  
  const auth = (state = initialState, action) => {
    const {type,data} = action;
    switch (type) {
      default:
        return {
          ...state,
        };
      case LOGIN_SUCCESS: 
          return {
            ...state,
            user:data
          }
        
    }
  };
  
  export default auth;
  