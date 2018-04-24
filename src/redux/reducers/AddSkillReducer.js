import { FETCH_SKILLS_FAILED,
         FETCH_SKILLS_SUCCESS,
         ADD_SKILLS_FAILED,
         ADD_SKILLS_SUCCESS,
         DELETE_SKILLS_FAILED,
         DELETE_SKILLS_SUCCESS } from '../actions'

  const initialState = []

  export default (state = initialState, action) => {
    switch(action.type) {
      case FETCH_SKILLS_SUCCESS:
        return [...action.payload]
      case FETCH_SKILLS_FAILED:
        return action.payload
      case ADD_SKILLS_SUCCESS:
        return [...state, action.payload]
      case ADD_SKILLS_FAILED:
        return action.payload
      case DELETE_SKILLS_SUCCESS:
        let theSkill = action.payload
        return state.filter(skill => skill.id !== theSkill.id)
      case DELETE_SKILLS_FAILED:
        return action.payload
      default:
        return state
    }
  }
