import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { create } from 'domain';

const initialState = {}

export const actionTypes = {
  TICK: 'TICK',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET'
}

const middleware = [thunk]

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
  default:
    return state
  }
}
  
  // ACTIONS
  
  export function initializeStore (initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
  }

  export default store = createStore(rootreducer, initialStatem, applyMiddleware(...middleware))