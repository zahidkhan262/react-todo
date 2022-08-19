import { ADD_POST, DLT_POST, EDIT_POST, FAV_POST, LIKE_POST, REM_FAV_POST } from "../constant/postType"

export const addPost = (post) => {
    // console.log(post, "my")
    return {
        type: ADD_POST,
        payload: post
    }
}


export const dltPost = (id) => {
    return {
        type: DLT_POST,
        payload: id
    }
}

export const editPost = (post) => {
    return {
        type: EDIT_POST,
        payload: post
    }
}
export const likePost = (post) => {
    return {
        type: LIKE_POST,
        payload: post
    }
}
export const favPost = (post) => {
    console.log(post, 'act')
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