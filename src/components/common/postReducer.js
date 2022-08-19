import { ADD_POST, DLT_POST, EDIT_POST, FAV_POST, LIKE_POST, REM_FAV_POST } from "../constant/postType"

const initialState = {
    posts: [],
    favouritePost: ""
}


const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            // console.log(action.payload, "state")
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        case DLT_POST:
            const newPost = state.posts.filter((ele, id) => id !== action.payload)
            return {
                ...state,
                posts: newPost
            }
        case EDIT_POST:
            return {

            }
        case LIKE_POST:
            return {
            }
        case FAV_POST:
            // console.log(action.payload, "red")
            return {
                ...state,
                favouritePost: [...state.favouritePost, action.payload]
            }
        case REM_FAV_POST:
            const remF = state.favouritePost.filter((item, i) => i !== action.payload)
            // console.log(remF, "dele")
            // console.log(action.payload, "dele")
            return {
                ...state,
                favouritePost: remF
            }
        default:
            return state;
    }
}

export default postReducer;