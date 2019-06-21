import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types'

const initialState = {
  message: {},
  id: null
}

export default function(state = initialState, action) {
  const { message, status, id } = action.payload
  switch(action.type) {
    case GET_ERRORS:
      return {
        id: id,
        message: message,
        status: null
      }
    case CLEAR_ERRORS:
      return {
        message: {},
        id: null,
        status: null
      }
      default: 
        return state
  }
}