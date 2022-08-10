import { ADD_PRODUCT, SET_ADD_PRODUCT } from "./constant";


export const productCartReducer = (state = { data: [] }, action) => {
    switch (action.type) {
        // case ADD_PRODUCT:
        //     console.log('ADD PRODUCT', action)
        //     return [action.state, ...state]
        case SET_ADD_PRODUCT:
            console.log('SET ADD PRODUCT', action)
            return { data: [...action.data, action.payload] }
        default:
            return state;
    }
}
