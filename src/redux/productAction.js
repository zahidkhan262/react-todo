import { ADD_PRODUCT, SET_ADD_PRODUCT } from "./constant"
export const addProduct = () => {
    return {
        type: ADD_PRODUCT,
        data: "zahid"
    }
}
// export const addToProduct = (data) => {
//     console.log(data)
//     return {
//         type: SET_ADD_PRODUCT,
//         data: data
//     }
// }