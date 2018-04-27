import { FETCH_PROJECTS_FAILED,
         FETCH_PROJECTS_SUCCESS,
         ADD_PROJECTS_FAILED,
         ADD_PROJECTS_SUCCESS,
         DELETE_PROJECTS_FAILED,
         DELETE_PROJECTS_SUCCESS,
         } from '../actions'

  const initialState = []

  export default (state = initialState, action) => {
    switch(action.type) {
      case FETCH_PROJECTS_SUCCESS:
        return [...action.payload]
      case FETCH_PROJECTS_FAILED:
        return action.payload
      case ADD_PROJECTS_SUCCESS:
        return [...state, action.payload]
      case ADD_PROJECTS_FAILED:
        return action.payload
      case DELETE_PROJECTS_SUCCESS:
        let theProject = action.payload
        return state.filter(project => project.id !== theProject.id)
      case DELETE_PROJECTS_FAILED:
        return action.payload
      
      default:
        return state
    }
  }
