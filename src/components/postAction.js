import { ADD_POST, DLT_POST, EDIT_POST, FAV_POST, LIKE_POST, REM_FAV_POST } from "../constant/postType"

export const addPost = (post) => {
    // console.log(post, "my")
    return {
        type: ADD_POST,
        payload: post,
    }
}


export const dltPost = (id) => {
    return {
        type: DLT_POST,
        payload: id
    }
}

export const editPost = (post, id) => {
    return {
        type: EDIT_POST,
        payload: post,
        id: parseInt(id)
    }
}
export const likePost = (id) => {
    return {
        type: LIKE_POST,
        payload: parseInt(id)
    }
}
export const favPost = (post) => {
    // console.log(post, 'act')
    return {
        type: FAV_POST,
        payload: post
    }
}
export const remFavPost = (id) => {
    return {
        type: REM_FAV_POST,
        payload: id
    }
}