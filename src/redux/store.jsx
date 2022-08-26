import { createStore } from "redux";
import RootReducer from "./RootReducer";

const store =createStore(RootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store


// main store with local storage

import { configureStore } from '@reduxjs/toolkit';
import { loadState, saveState } from './redux/localStorage';
import rootReducer from './redux/rootReducer';

const persistedState = loadState();
const store = configureStore({
    reducer: rootReducer,
    persistedState: persistedState
})
store.subscribe(() => {
    saveState({
        post: store.getState().post,
        auth: store.getState().auth.userAuth
    })
})


export default store;
