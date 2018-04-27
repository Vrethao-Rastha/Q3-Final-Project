import {
  FETCH_FEATURE_SUCCESS,
  FETCH_FEATURE_FAILED} from '../actions'

  const initialState = []

  export default (state = initialState, action) => {
    switch(action.type) {
      case FETCH_FEATURE_SUCCESS:
        return [...action.payload]
      case FETCH_FEATURE_FAILED:
        return action.payload
      default:
        return state
    }
  }
