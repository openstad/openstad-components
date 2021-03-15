import { combineReducers } from 'redux'
import configReducer from '../features/config/configSlice'
import ideasReducer from '../features/ideas/ideasSlice'

const rootReducer = combineReducers({
  config: configReducer,
  ideas: ideasReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
