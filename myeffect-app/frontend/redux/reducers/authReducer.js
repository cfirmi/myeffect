import {
  USER_LOADING, 
  USER_LOADED, 
  AUTH_ERROR, 
  LOGIN_SUCCESS, 
  LOGIN_FAIL, 
  LOGOUT_SUCCESS, 
  REGISTER_SUCCESS, 
  REGISTER_FAIL, 
  GET_ERRORS, 
  CLEAR_ERRORS } 
from '../actions/types'

// const tokens = localStorage.getItem('token');
const initalState = {
  // token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: null,
  user: null
}

export default function(state = initalState, action) {
  switch(action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      }
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false
      }
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      }
    default: 
    return state
  }
}