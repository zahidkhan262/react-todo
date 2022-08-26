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

