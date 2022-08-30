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



// now change for RTK 30-aug-2022

import { configureStore } from '@reduxjs/toolkit';
// import { loadState, saveState } from './redux/localStorage';
import authSlice from './features/authSlice';
import todoReducer from './redux/reducer/todoReducer'
import postReducer from './redux/reducer/postReducer'
// const persistedState = loadState();
const store = configureStore({
    reducer: {
        auth:authSlice,
        todo: todoReducer,
        post: postReducer,
    }
})
// persistedState: persistedState
// store.subscribe(() => {
//     saveState({
//         post: store.getState().post,
//         auth: store.getState().auth.userAuth
//     })
// })


export default store;

