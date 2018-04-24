import { FETCH_POSTS_FAILED,
         FETCH_POSTS_SUCCESS,
         ADD_POSTS_FAILED,
         ADD_POSTS_SUCCESS,
         DELETE_POSTS_FAILED,
         DELETE_POSTS_SUCCESS } from '../actions'

  const initialState = []

  export default (state = initialState, action) => {
    switch(action.type) {
      case FETCH_POSTS_SUCCESS:
        return [...action.payload]
      case FETCH_POSTS_FAILED:
        return action.payload
      case ADD_POSTS_SUCCESS:
        return [...state, action.payload]
      case ADD_POSTS_FAILED:
        return action.payload
      case DELETE_POSTS_SUCCESS:
        let thePost = action.payload
        return state.filter(post => post.id !== Number(thePost))
      case DELETE_POSTS_FAILED:
        return action.payload
      default:
        return state
    }
  }
