import { ADD_POST, DLT_POST, EDIT_POST, FAV_POST, LIKE_POST, REM_FAV_POST } from "../constant/postType"

const initialState = {
    posts: [],
    favouritePost: "",
    editPost: "",
    error: null,
    like: 0
}


const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:

            return {
                ...state,
                posts: [...state.posts, action.payload],
            }
        case DLT_POST:
            const newPost = state.posts.filter((ele, id) => id !== action.payload)
            return {
                ...state,
                posts: newPost
            }
        case EDIT_POST:
            const edit = state.posts.map((ele, id) => {
                return (id === action.id ? action.payload : ele)
            })
            // console.log(edit, "edit")
            return {
                ...state,
                posts: edit
            }
        case LIKE_POST:
            // const liked = state.posts.map((ele, idx) => idx === action.payload)
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