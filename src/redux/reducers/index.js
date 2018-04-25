import { combineReducers } from 'redux'
import AddPostReducer from './AddPostReducer'
import AddSkillReducer from './AddSkillReducer'
import FeatureProjectReducer from './FeatureProjectReducer'
import CreateUserReducer from './CreateUserReducer'
import MessageReducer from './MessageReducer'
import FetchUserReducer from './FetchUserReducer'

export default combineReducers({
  post: AddPostReducer,
  skill: AddSkillReducer,
  projects: FeatureProjectReducer,
  user: CreateUserReducer,
  message: MessageReducer,
  users: FetchUserReducer
})
