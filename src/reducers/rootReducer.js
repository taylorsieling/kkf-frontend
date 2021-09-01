import { combineReducers } from 'redux';
import kittenReducer from './kittenReducer'

const rootReducer = combineReducers({
    kittenReducer,
})

export default rootReducer