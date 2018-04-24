import {FETCH_USER_SUCCESS,
        FETCH_USER_FAILED } from '../actions'

  const initialState = []

  export default(state = initialState, action) => {
    switch(action.type) {
      case FETCH_USER_SUCCESS:
        return [...action.payload]
      case FETCH_USER_FAILED:
        return action.payload
      default:
        return state
    }
  }
