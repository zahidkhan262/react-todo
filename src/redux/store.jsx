import { createStore } from "redux";
import RootReducer from "./RootReducer";

const store =createStore(RootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store