import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initState = {

}

export const actionTypes = {
}

// REDUCERS
export const reducer = (state = initState, action) => {
}

// ACTIONS

export function initializeStore (initialState = initState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}