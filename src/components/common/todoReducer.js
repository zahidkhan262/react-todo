import { ADD_TODO, DLT_TODO, UPDT_TODO } from "../constant"

const initialState = {
    todos: []
}

const todoReducer = (state = initialState, action) => {
    // console.log(action.payload, "pay")
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DLT_TODO:
            const newData = state.todos.filter((ele, k) => k !== action.payload)
            return {
                ...state,
                todos: newData
            }
        case UPDT_TODO:
            // console.log(action.payload, "uppay")
            const updateData = state.todos.map((ele, id) => id === action.id ? action.payload : ele)
            return {
                ...state,
                todos: updateData
            }
        default:
            return state
    }
}

export default todoReducer;