import { FETCH_MESSAGES_FAILED,
         FETCH_MESSAGES_SUCCESS,
         ADD_MESSAGES_FAILED,
         ADD_MESSAGES_SUCCESS,
         DELETE_MESSAGES_FAILED,
         DELETE_MESSAGES_SUCCESS } from '../actions'

  const initialState = []

  export default (state = initialState, action) => {
    switch(action.type) {
      case FETCH_MESSAGES_SUCCESS:
        return [...action.payload]
      case FETCH_MESSAGES_FAILED:
        return action.payload
      case ADD_MESSAGES_SUCCESS:
        return [...state, action.payload]
      case ADD_MESSAGES_FAILED:
        return action.payload
      case DELETE_MESSAGES_SUCCESS:
        let theMessage = action.payload
        return state.filter(message => message.id !== theMessage.id)
      case DELETE_MESSAGES_FAILED:
        return action.payload
      default:
        return state
    }
  }
