import {combineReducers} from 'redux'
import sportReducer from './sportReducer'
import articleReducer from './articleReducer'
import profileReducer from './profileReducer'
import imageReducer from './imageReducer'
import adminReducers from './adminReducers'


export default combineReducers({sportReducer,profileReducer,imageReducer,adminReducers,articleReducer})
