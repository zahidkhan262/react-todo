import { combineReducers } from "redux";
import postReducer from "./reducer/postReducer";
import todoReducer from './reducer/todoReducer'

const rootReducer = combineReducers({
    todo: todoReducer,
    post: postReducer
})

export default rootReducer;