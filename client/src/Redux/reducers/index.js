import {combineReducers} from 'redux'
import sportReducer from './sportReducer'
import articleReducer from './articleReducer'
import profileReducer from './profileReducer'
import adminReducers from './adminReducers'


export default combineReducers({sportReducer,profileReducer,adminReducers,articleReducer})
