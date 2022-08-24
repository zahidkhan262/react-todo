import { LOGIN_FORM, LOGOUT_FORM, REGISTER_FORM } from "../constant/authType"

const initialState = {
    userAuth: [],
    isLogged: null,
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_FORM:
            return {
                ...state,
                userAuth: [...state.userAuth, action.payload]
            }
        case LOGIN_FORM:
            return {
                ...state,
                user: action.payload
            }
        case LOGOUT_FORM:
            return {
                ...state,
                user: null
            }
        default:
            return state;
    }
}

export default authReducer