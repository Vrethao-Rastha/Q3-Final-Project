import { combineReducers } from 'redux'
import AddPostReducer from './AddPostReducer'
import AddSkillReducer from './AddSkillReducer'
import FeatureProjectReducer from './FeatureProjectReducer'
import MessageReducer from './MessageReducer'
import FetchUserReducer from './FetchUserReducer'
import AboutReducer from './AboutReducer'
import FeaturePostReducer from './FeaturePostReducer'

export default combineReducers({
  post: AddPostReducer,
  skill: AddSkillReducer,
  projects: FeatureProjectReducer,
  message: MessageReducer,
  users: FetchUserReducer,
  about: AboutReducer,
  feature: FeaturePostReducer
})
