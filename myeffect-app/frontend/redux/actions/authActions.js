import axios from 'axios'
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
from './types'


//Check token and load userSelect: 

export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING })
  //Fetch the User :)))
  axios.get('/user')


}