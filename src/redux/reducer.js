import { ADD_TO_CART } from "./constant";

const initialState = [
    { id: '1', title: 'React', desc: 'I am react js developer' },
    { id: '2', title: 'node', desc: 'I am node js developer' },
    { id: '3', title: 'next', desc: 'I am next js developer' },
];

// const initialState = 10

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [action.state, ...state]
        default:
            return state
    }
}
