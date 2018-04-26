import { FETCH_ABOUT_FAILED,
         FETCH_ABOUT_SUCCESS,
       } from '../actions'

  const initialState = []

  export default (state = initialState, action) => {
    switch(action.type) {
      case FETCH_ABOUT_SUCCESS:
        return [...action.payload]
      case FETCH_ABOUT_FAILED:
        return action.payload
      default:
        return state
    }
  }
