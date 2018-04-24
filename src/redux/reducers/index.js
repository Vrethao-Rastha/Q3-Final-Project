import { combineReducers } from 'redux'
import AddPostReducer from './AddPostReducer'
import AddSkillReducer from './AddSkillReducer'
import CreateFeatureProjectReducer from './CreateFeatureProjectReducer'
import CreateUserReducer from './CreateUserReducer'
import MessageReducer from './MessageReducer'
import FetchUserReducer from './FetchUserReducer'

export default combineReducers({
  post: AddPostReducer,
  skill: AddSkillReducer,
  project: CreateFeatureProjectReducer,
  user: CreateUserReducer,
  message: MessageReducer,
  users: FetchUserReducer
})
