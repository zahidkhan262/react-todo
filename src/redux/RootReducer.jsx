import CounterReducer from './CounterReducer';
import {combineReducers} from 'redux'


const RootReducer=combineReducers({
    CounterReducer,
})

export default RootReducer;