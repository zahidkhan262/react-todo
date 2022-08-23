import { ADD_TODO, DLT_TODO, UPDT_TODO } from '../constant/index'
export const addTodo = (data) => {
    // console.log(data, "all")
    return {
        type: ADD_TODO,
        payload: data
    }
}
export const deleteTodo = (id) => {
    return {
        type: DLT_TODO,
        payload: id
    }
}
export const updateTodo = (data, id) => {
    return {
        type: UPDT_TODO,
        payload: data,
        id: id
    }
}